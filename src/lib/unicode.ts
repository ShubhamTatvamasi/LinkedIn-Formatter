// Unicode "Mathematical Alphanumeric Symbols" styling.
// LinkedIn posts are plain text, so styling works by swapping ASCII letters and
// digits for look-alike code points. Maps are generated from block offsets
// (plus the handful of letters that live in the older Letterlike Symbols block)
// instead of being typed by hand.

export type LetterStyle =
  | 'bold'
  | 'italic'
  | 'boldItalic'
  | 'monospace'
  | 'script'
  | 'fraktur'
  | 'doubleStruck';

export type MarkStyle = 'underline' | 'strikethrough';
export type Style = LetterStyle | MarkStyle;

interface StyleSpec {
  upper: number;
  lower: number;
  digit?: number;
  exceptions?: Record<string, number>;
}

const SPECS: Record<LetterStyle, StyleSpec> = {
  bold: { upper: 0x1d5d4, lower: 0x1d5ee, digit: 0x1d7ec },
  italic: { upper: 0x1d608, lower: 0x1d622 },
  boldItalic: { upper: 0x1d63c, lower: 0x1d656, digit: 0x1d7ec },
  monospace: { upper: 0x1d670, lower: 0x1d68a, digit: 0x1d7f6 },
  script: { upper: 0x1d4d0, lower: 0x1d4ea },
  fraktur: {
    upper: 0x1d504,
    lower: 0x1d51e,
    exceptions: { C: 0x212d, H: 0x210c, I: 0x2111, R: 0x211c, Z: 0x2128 },
  },
  doubleStruck: {
    upper: 0x1d538,
    lower: 0x1d552,
    digit: 0x1d7d8,
    exceptions: { C: 0x2102, H: 0x210d, N: 0x2115, P: 0x2119, Q: 0x211a, R: 0x211d, Z: 0x2124 },
  },
};

export const LETTER_STYLES = Object.keys(SPECS) as LetterStyle[];

const UNDERLINE = '̲';
const STRIKE = '̶';
const MARKS: Record<MarkStyle, string> = { underline: UNDERLINE, strikethrough: STRIKE };

function buildMap(spec: StyleSpec): Map<string, string> {
  const map = new Map<string, string>();
  for (let i = 0; i < 26; i++) {
    const up = String.fromCharCode(65 + i);
    const low = String.fromCharCode(97 + i);
    map.set(up, String.fromCodePoint(spec.exceptions?.[up] ?? spec.upper + i));
    map.set(low, String.fromCodePoint(spec.lower + i));
  }
  if (spec.digit !== undefined) {
    for (let i = 0; i < 10; i++) map.set(String(i), String.fromCodePoint(spec.digit + i));
  }
  return map;
}

const FORWARD = Object.fromEntries(
  LETTER_STYLES.map((s) => [s, buildMap(SPECS[s])]),
) as Record<LetterStyle, Map<string, string>>;

/** styled code point -> [plain char, style] */
const REVERSE = new Map<string, [string, LetterStyle]>();
for (const style of LETTER_STYLES) {
  for (const [plain, styled] of FORWARD[style]) {
    // bold and boldItalic share digits; keep the first (bold) owner
    if (!REVERSE.has(styled)) REVERSE.set(styled, [plain, style]);
  }
}

// A digit followed by VS16 or the keycap mark is part of an emoji (1️⃣), not text.
const KEYCAP_TAIL = /^[️⃣]/;

function isMarkStyle(style: Style): style is MarkStyle {
  return style === 'underline' || style === 'strikethrough';
}

/** Strip every letter style and combining mark, returning plain ASCII where possible. */
export function toPlain(text: string): string {
  let out = '';
  for (const ch of text) {
    if (ch === UNDERLINE || ch === STRIKE) continue;
    out += REVERSE.get(ch)?.[0] ?? ch;
  }
  return out;
}

function applyLetterStyle(text: string, style: LetterStyle): string {
  const map = FORWARD[style];
  const chars = Array.from(text);
  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1] ?? '';
    if (/\d/.test(ch) && KEYCAP_TAIL.test(next)) {
      out += ch;
      continue;
    }
    out += map.get(ch) ?? ch;
  }
  return out;
}

const segmenter =
  typeof Intl !== 'undefined' && 'Segmenter' in Intl
    ? new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    : null;

function graphemes(text: string): string[] {
  return segmenter ? Array.from(segmenter.segment(text), (s) => s.segment) : Array.from(text);
}

function applyMark(text: string, mark: string): string {
  return graphemes(text)
    .map((g) => (/^\s+$/.test(g) || g.includes(mark) ? g : g + mark))
    .join('');
}

function removeMark(text: string, mark: string): string {
  return text.split(mark).join('');
}

/** True when every styleable character in `text` already carries `style`. */
export function hasStyle(text: string, style: Style): boolean {
  if (isMarkStyle(style)) {
    const mark = MARKS[style];
    const visible = graphemes(text).filter((g) => !/^\s+$/.test(g));
    return visible.length > 0 && visible.every((g) => g.includes(mark));
  }
  let seen = false;
  for (const ch of text) {
    const plain = REVERSE.get(ch)?.[0] ?? ch;
    if (!FORWARD[style].has(plain)) continue;
    seen = true;
    if (FORWARD[style].get(plain) !== ch) return false;
  }
  return seen;
}

/**
 * Toggle a style on `text`: if it is already fully styled, remove the style;
 * otherwise apply it. Letter styles replace each other (bold -> italic), while
 * underline/strikethrough layer on top of any letter style.
 */
export function toggleStyle(text: string, style: Style): string {
  if (isMarkStyle(style)) {
    const mark = MARKS[style];
    return hasStyle(text, style) ? removeMark(text, mark) : applyMark(text, mark);
  }
  // Keep combining marks, swap letter style underneath them.
  let base = '';
  for (const ch of text) base += REVERSE.get(ch)?.[0] ?? ch;
  return hasStyle(text, style) ? base : applyLetterStyle(base, style);
}

export function applyStyle(text: string, style: LetterStyle): string {
  return applyLetterStyle(toPlain(text), style);
}

export type CaseMode = 'upper' | 'lower' | 'title' | 'sentence';

export function changeCase(text: string, mode: CaseMode): string {
  const plain = toPlain(text);
  switch (mode) {
    case 'upper':
      return plain.toUpperCase();
    case 'lower':
      return plain.toLowerCase();
    case 'title':
      return plain.toLowerCase().replace(/(^|[\s\-–—/(["'])(\p{L})/gu, (_, pre, c) => pre + c.toUpperCase());
    case 'sentence':
      return plain.toLowerCase().replace(/(^\s*|[.!?]\s+|\n\s*)(\p{L})/gu, (_, pre, c) => pre + c.toUpperCase());
  }
}

/** Share of letters that are Unicode-styled, used for the accessibility hint. */
export function styledRatio(text: string): number {
  let letters = 0;
  let styled = 0;
  for (const ch of text) {
    if (REVERSE.has(ch)) {
      styled++;
      letters++;
    } else if (/[A-Za-z0-9]/.test(ch)) {
      letters++;
    }
  }
  return letters ? styled / letters : 0;
}
