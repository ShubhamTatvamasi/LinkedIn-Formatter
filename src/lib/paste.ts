// Smart paste: turn rich clipboard content (ChatGPT, Google Docs, Word, web
// pages) or Markdown into LinkedIn-ready Unicode text.

import { applyStyle, type LetterStyle } from './unicode.ts';

export function normalize(text: string): string {
  return text
    .replace(/\r\n?/g, '\n')
    .replace(/[​‌⁠﻿]/g, '')
    .replace(/ /g, ' ')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n');
}

// ---------------------------------------------------------------- Markdown

const BOLD = (s: string) => applyStyle(s, 'bold');
const ITALIC = (s: string) => applyStyle(s, 'italic');
const MONO = (s: string) => applyStyle(s, 'monospace');

/** Convert common Markdown to Unicode. Returns the input unchanged if no Markdown is found. */
export function markdownToUnicode(input: string): string {
  const text = normalize(input);
  const stash: string[] = [];
  const hold = (s: string) => `\u0000${stash.push(s) - 1}\u0000`;

  let out = text
    // fenced code blocks: keep content, drop fences
    .replace(/^```[^\n]*\n([\s\S]*?)\n?```$/gm, (_, code: string) => hold(MONO(code)))
    // inline code
    .replace(/`([^`\n]+)`/g, (_, code: string) => hold(MONO(code)))
    // headings -> bold line
    .replace(/^#{1,6}[ \t]+(.+?)[ \t]*#*$/gm, (_, h: string) => BOLD(h))
    // bullets
    .replace(/^[ \t]*[-*+][ \t]+(?!\[[ xX]\])/gm, '• ')
    // task lists
    .replace(/^[ \t]*[-*+][ \t]+\[[xX]\][ \t]+/gm, '✅ ')
    .replace(/^[ \t]*[-*+][ \t]+\[ \][ \t]+/gm, '⬜ ')
    // block quotes
    .replace(/^>[ \t]?/gm, '│ ')
    // horizontal rules
    .replace(/^(?:[-*_][ \t]*){3,}$/gm, '━━━━━━━━━━━━━━━━━━━━')
    // links: keep text and URL so it stays clickable on LinkedIn
    .replace(/\[([^\]\n]+)\]\((https?:\/\/[^)\s]+)\)/g, '$1 ($2)')
    // bold+italic, bold, italic, strikethrough
    .replace(/(\*\*\*|___)(?=\S)([^\n]+?)(?<=\S)\1/g, (_, __, s: string) => applyStyle(s, 'boldItalic'))
    .replace(/(\*\*|__)(?=\S)([^\n]+?)(?<=\S)\1/g, (_, __, s: string) => BOLD(s))
    .replace(/(^|[^\w*])\*(?=\S)([^*\n]+?)(?<=\S)\*(?!\w)/g, (_, pre: string, s: string) => pre + ITALIC(s))
    .replace(/(^|[^\w])_(?=\S)([^_\n]+?)(?<=\S)_(?!\w)/g, (_, pre: string, s: string) => pre + ITALIC(s))
    .replace(/~~(?=\S)([^~\n]+?)(?<=\S)~~/g, (_, s: string) =>
      Array.from(s, (c) => (/\s/.test(c) ? c : c + '̶')).join(''),
    );

  out = out.replace(/\u0000(\d+)\u0000/g, (_, i: string) => stash[Number(i)]);
  return out === text ? input : out;
}

export function looksLikeMarkdown(text: string): boolean {
  return /(\*\*|__)\S[^\n]*?\S?\1|^#{1,6}\s+\S|^```|`[^`\n]+`|^[ \t]*[-*+]\s+\S|\[[^\]]+\]\(https?:/m.test(text);
}

// ---------------------------------------------------------------- HTML

const BLOCK = new Set([
  'p', 'div', 'section', 'article', 'header', 'footer', 'blockquote', 'pre',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'table', 'tr', 'hr',
]);
const SKIP = new Set(['style', 'script', 'meta', 'link', 'title', 'head', 'template', 'svg']);

interface Fmt {
  bold: boolean;
  italic: boolean;
  mono: boolean;
  strike: boolean;
}

function styleFor(f: Fmt): LetterStyle | null {
  if (f.mono) return 'monospace';
  if (f.bold && f.italic) return 'boldItalic';
  if (f.bold) return 'bold';
  if (f.italic) return 'italic';
  return null;
}

function readFmt(el: Element, parent: Fmt): Fmt {
  const tag = el.tagName.toLowerCase();
  const css = (el.getAttribute('style') || '').toLowerCase();
  const f = { ...parent };

  if (tag === 'b' || tag === 'strong' || /^h[1-6]$/.test(tag) || tag === 'th') f.bold = true;
  if (tag === 'i' || tag === 'em' || tag === 'cite') f.italic = true;
  if (tag === 'code' || tag === 'pre' || tag === 'kbd' || tag === 'samp') f.mono = true;
  if (tag === 's' || tag === 'del' || tag === 'strike') f.strike = true;

  const weight = css.match(/font-weight\s*:\s*([a-z0-9]+)/);
  if (weight) f.bold = weight[1] === 'bold' || weight[1] === 'bolder' || Number(weight[1]) >= 600;
  const fstyle = css.match(/font-style\s*:\s*([a-z]+)/);
  if (fstyle) f.italic = fstyle[1] === 'italic' || fstyle[1] === 'oblique';
  if (/font-family\s*:[^;]*(mono|courier|consolas|menlo)/.test(css)) f.mono = true;
  if (/text-decoration[^:]*:[^;]*line-through/.test(css)) f.strike = true;
  return f;
}

/**
 * Walk a parsed clipboard HTML tree and emit Unicode text. Paragraph-level
 * blocks are separated by a blank line (LinkedIn's readable default), list
 * items by a single newline.
 */
export function htmlToUnicode(root: Node): string {
  const parts: string[] = [];
  // Ensure the output ends with at least `n` newlines (never stacks), and
  // never breaks right after a list marker like "• ".
  const nl = (n: 1 | 2) => {
    const tail = parts.slice(-4).join('');
    if (!tail.trim() && parts.length === 0) return;
    if (/(^|\n)[ \t]*(•|◦|\d+\.|│) $/.test(tail)) return;
    const have = tail.match(/\n*$/)![0].length;
    if (have < n) parts.push('\n'.repeat(n - have));
  };

  const walk = (node: Node, fmt: Fmt, listStack: { ordered: boolean; n: number }[]) => {
    if (node.nodeType === 3) {
      let text = (node.textContent || '').replace(/ /g, ' ');
      if (!fmt.mono) text = text.replace(/\s*\n\s*/g, ' ');
      if (!text) return;
      const style = styleFor(fmt);
      if (style) text = applyStyle(text, style);
      if (fmt.strike) text = Array.from(text, (c) => (/\s/.test(c) ? c : c + '̶')).join('');
      parts.push(text);
      return;
    }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11) return;

    const el = node as Element;
    const tag = el.tagName?.toLowerCase() ?? '';
    if (SKIP.has(tag)) return;
    if (tag === 'br') return nl(1);
    if (tag === 'hr') {
      nl(2);
      parts.push('━━━━━━━━━━━━━━━━━━━━');
      return nl(2);
    }

    const f = el.tagName ? readFmt(el, fmt) : fmt;
    let stack = listStack;

    if (tag === 'ul' || tag === 'ol') {
      const start = Number(el.getAttribute('start') || 1);
      stack = [...listStack, { ordered: tag === 'ol', n: start - 1 }];
      if (listStack.length === 0) nl(2);
    } else if (tag === 'li') {
      nl(1);
      const list = listStack[listStack.length - 1];
      const indent = '   '.repeat(Math.max(0, listStack.length - 1));
      if (list?.ordered) parts.push(`${indent}${++list.n}. `);
      else parts.push(indent + (listStack.length > 1 ? '◦ ' : '• '));
    } else if (tag === 'blockquote') {
      nl(2);
      parts.push('│ ');
    } else if (BLOCK.has(tag)) {
      nl(listStack.length ? 1 : 2);
    } else if (tag === 'td' || tag === 'th') {
      parts.push(' ');
    }

    for (const child of Array.from(node.childNodes)) walk(child, f, stack);

    if (tag === 'a') {
      const href = el.getAttribute('href') || '';
      const label = el.textContent?.trim() || '';
      if (/^https?:/.test(href) && label && !href.includes(label.replace(/^https?:\/\//, ''))) {
        parts.push(` (${href})`);
      }
    }
    if ((BLOCK.has(tag) && tag !== 'li') || tag === 'ul' || tag === 'ol') {
      nl(listStack.length ? 1 : 2);
    }
  };

  walk(root, { bold: false, italic: false, mono: false, strike: false }, []);

  return normalize(parts.join(''))
    .split('\n')
    .map((l) => l.replace(/^[ \t]+(?![•◦\d])/, '').replace(/[ \t]{2,}/g, ' '))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** True if the clipboard HTML carries formatting we can translate. */
export function htmlHasFormatting(html: string): boolean {
  return /<(b|strong|i|em|code|pre|h[1-6]|li|s|del)\b/i.test(html) ||
    /font-weight\s*:\s*(bold|[6-9]00)|font-style\s*:\s*italic/i.test(html);
}

export interface PasteResult {
  text: string;
  converted: boolean;
}

/** Decide how to convert a paste. `parse` turns HTML into a DOM node (DOMParser in the browser). */
export function convertPaste(
  html: string,
  plain: string,
  parse: (html: string) => Node,
): PasteResult {
  if (html && htmlHasFormatting(html)) {
    let text = htmlToUnicode(parse(html));
    // ChatGPT sometimes ships literal **markdown** inside HTML
    if (looksLikeMarkdown(text)) text = markdownToUnicode(text);
    if (text.trim()) return { text, converted: true };
  }
  const clean = normalize(plain);
  const md = markdownToUnicode(clean);
  return { text: md, converted: md !== clean };
}
