import { toggleStyle, hasStyle, toPlain, changeCase, styledRatio, type Style, type CaseMode } from '../lib/unicode.ts';
import { convertPaste } from '../lib/paste.ts';
import { TEMPLATES } from '../lib/templates.ts';
import { History, type Snapshot } from '../lib/history.ts';

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

const editor = $<HTMLTextAreaElement>('editor');
const preview = $('preview');
const previewEmpty = $('previewEmpty');
const seeMore = $<HTMLButtonElement>('seeMore');
const device = $('device');
const foldNote = $('foldNote').querySelector('span')!;
const toastEl = $('toast');

const DRAFT_KEY = 'lf-draft';
const LIMIT = 3000;
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

// ------------------------------------------------------------ storage

const store = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      if (value) localStorage.setItem(key, value);
      else localStorage.removeItem(key);
    } catch {
      /* private mode or storage blocked */
    }
  },
};

// ------------------------------------------------------------ history

const snap = (): Snapshot => ({
  value: editor.value,
  start: editor.selectionStart,
  end: editor.selectionEnd,
});
const history = new History(snap());
let typingTimer: number | undefined;

function flushTyping() {
  if (typingTimer !== undefined) {
    clearTimeout(typingTimer);
    typingTimer = undefined;
  }
  history.push(snap());
}

function restore(s: Snapshot | null, label: string) {
  if (!s) return toast(`Nothing to ${label.toLowerCase()}`);
  editor.value = s.value;
  editor.setSelectionRange(s.start, s.end);
  editor.focus();
  changed();
}

const undo = () => {
  flushTyping();
  restore(history.undo(), 'Undo');
};
const redo = () => {
  flushTyping();
  restore(history.redo(), 'Redo');
};

/** Replace [start, end) with `text`, record history, keep a sensible selection. */
function edit(start: number, end: number, text: string, select: 'inserted' | 'end' = 'inserted') {
  flushTyping();
  editor.focus();
  editor.setRangeText(text, start, end, select === 'inserted' ? 'select' : 'end');
  history.push(snap());
  changed();
}

// ------------------------------------------------------------ selection helpers

const WORD = /[\p{L}\p{N}\p{M}'’_]/u;

/** The selection, or the word under the caret when nothing is selected. */
function selectionOrWord(): [number, number] | null {
  let { selectionStart: s, selectionEnd: e, value } = editor;
  if (s !== e) return [s, e];
  const left = value.slice(0, s).match(/[\p{L}\p{N}\p{M}'’_]+$/u)?.[0] ?? '';
  const right = value.slice(s).match(/^[\p{L}\p{N}\p{M}'’_]+/u)?.[0] ?? '';
  if (!left && !right) return null;
  return [s - left.length, e + right.length];
}

/** Expand the selection to whole lines. */
function selectedLines(): [number, number] {
  const { selectionStart: s, selectionEnd: e, value } = editor;
  const start = value.lastIndexOf('\n', s - 1) + 1;
  let end = value.indexOf('\n', e > s && value[e - 1] === '\n' ? e - 1 : e);
  if (end === -1) end = value.length;
  return [start, end];
}

// ------------------------------------------------------------ commands

const STYLE_NAMES: Record<Style, string> = {
  bold: 'Bold',
  italic: 'Italic',
  boldItalic: 'Bold italic',
  monospace: 'Monospace',
  script: 'Script',
  fraktur: 'Fraktur',
  doubleStruck: 'Double-struck',
  underline: 'Underline',
  strikethrough: 'Strikethrough',
};

function applyStyleCmd(style: Style) {
  const range = selectionOrWord();
  if (!range) return toast('Select some text first');
  const [s, e] = range;
  const before = editor.value.slice(s, e);
  const after = toggleStyle(before, style);
  edit(s, e, after);
  if (WORD.test(before)) toast(`${STYLE_NAMES[style]} ${hasStyle(after, style) ? 'applied' : 'removed'}`);
}

function caseCmd(mode: CaseMode) {
  const range = selectionOrWord();
  if (!range) return toast('Select some text first');
  edit(range[0], range[1], changeCase(editor.value.slice(...range), mode));
}

function clearFormatCmd() {
  const { selectionStart: s, selectionEnd: e } = editor;
  const [a, b] = s === e ? [0, editor.value.length] : [s, e];
  edit(a, b, toPlain(editor.value.slice(a, b)));
  toast(s === e ? 'Removed all formatting' : 'Formatting removed');
}

const LIST_PREFIX = /^(\s*)(?:[•◦▪→➜▸✓✔✅☐⬜-]|\d+[.)]|[A-Z]\))\s+/u;
const LIST_MARK: Record<string, (i: number) => string> = {
  bullet: () => '• ',
  number: (i) => `${i + 1}. `,
  check: () => '✅ ',
  arrow: () => '→ ',
};

function listCmd(kind: string) {
  const [s, e] = selectedLines();
  const lines = editor.value.slice(s, e).split('\n');
  const content = lines.filter((l) => l.trim());
  const mark = LIST_MARK[kind];
  const same = content.length > 0 && content.every((l, i) => l.trimStart().startsWith(mark(i).trim()));

  let i = 0;
  const out = lines
    .map((l) => {
      if (!l.trim()) return l;
      const bare = l.replace(LIST_PREFIX, '$1');
      return same ? bare : mark(i++) + bare.trimStart();
    })
    .join('\n');
  edit(s, e, out || mark(0), out ? 'inserted' : 'end');
}

const SNIPPETS: Record<string, string> = {
  'divider-heavy': '━━━━━━━━━━━━━━━━━━━━',
  'divider-light': '────────────────────',
  'divider-dots': '• • • • • • • • • •',
  'divider-stars': '✦  ✦  ✦',
};

/** Insert a block on its own line, padding with newlines as needed. */
function insertBlock(block: string) {
  const { selectionStart: s, selectionEnd: e, value } = editor;
  const pre = s === 0 || value[s - 1] === '\n' ? '' : '\n';
  const post = value[e] === '\n' || e === value.length ? '\n' : '\n\n';
  edit(s, e, pre + block + post, 'end');
}

function quoteCmd() {
  const { selectionStart: s, selectionEnd: e, value } = editor;
  if (s === e) return insertBlock('❝ Your quote here ❞');
  const text = value.slice(s, e).trim().replace(/^❝\s*|\s*❞$/g, '');
  const wrapped = value.slice(s, e).trim().startsWith('❝') ? text : `❝ ${text} ❞`;
  edit(s, e, wrapped);
}

function insertText(text: string) {
  edit(editor.selectionStart, editor.selectionEnd, text, 'end');
}

// ------------------------------------------------------------ preview + stats

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function renderPreview(text: string) {
  // Hashtags, mentions and links render in LinkedIn blue. Only plain ASCII
  // hashtags are real hashtags; styled ones (#𝗯𝗼𝗹𝗱) don't link on LinkedIn.
  preview.innerHTML = esc(text).replace(
    /(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"])|(^|[\s(])([#@][A-Za-z0-9_]\w*)/g,
    (_m, url, pre, tag) => (url ? `<span class="hl">${url}</span>` : `${pre}<span class="hl">${tag}</span>`),
  );
}

let expanded = false;

function updateFold() {
  const empty = !editor.value.trim();
  previewEmpty.hidden = !empty;
  preview.hidden = empty;
  preview.classList.toggle('is-clamped', !expanded);
  const overflowing = !empty && (expanded || preview.scrollHeight > preview.clientHeight + 2);
  seeMore.hidden = !overflowing;
  seeMore.textContent = expanded ? 'show less' : '…more';
  foldNote.textContent = empty
    ? 'Everything above “…more” is your hook. Make it count.'
    : overflowing
      ? 'Readers see only the lines above “…more” until they click. That’s your hook.'
      : 'Your whole post shows without a “…more” cut.';
}

function updateStats(text: string) {
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const secs = Math.round((words / 230) * 60);
  $('charCount').textContent = chars.toLocaleString();
  $('wordCount').textContent = words.toLocaleString();
  $('readTime').textContent = secs < 60 ? `${secs}s` : `${Math.round(secs / 60)} min`;

  const state = chars > LIMIT ? 'over' : chars > 2500 ? 'warn' : 'ok';
  $('charStat').dataset.state = state;
  const fill = $('meterFill');
  fill.style.width = `${Math.min(100, (chars / LIMIT) * 100)}%`;
  fill.dataset.state = state;

  $('a11yHint').hidden = !(styledRatio(text) > 0.4 && words > 12);
}

function autosize() {
  editor.style.height = 'auto';
  editor.style.height = `${Math.max(editor.scrollHeight, 320)}px`;
}

let saveTimer: number | undefined;
function changed() {
  const text = editor.value;
  renderPreview(text);
  updateFold();
  updateStats(text);
  autosize();
  clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => store.set(DRAFT_KEY, text), 300);
}

// ------------------------------------------------------------ toast

let toastTimer: number | undefined;
function toast(msg: string) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('show'), 2200);
}

// ------------------------------------------------------------ copy

async function copyPost() {
  const text = editor.value;
  if (!text.trim()) return toast('Nothing to copy yet');
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const { selectionStart: s, selectionEnd: e } = editor;
    editor.select();
    const ok = document.execCommand('copy');
    editor.setSelectionRange(s, e);
    if (!ok) return toast('Copy failed. Select the text and press Ctrl+C');
  }
  const btn = $('copyBtn');
  btn.classList.add('done');
  setTimeout(() => btn.classList.remove('done'), 2000);
}

// ------------------------------------------------------------ wiring

editor.addEventListener('input', () => {
  changed();
  clearTimeout(typingTimer);
  typingTimer = window.setTimeout(() => {
    typingTimer = undefined;
    history.push(snap());
  }, 400);
});

editor.addEventListener('paste', (e) => {
  const data = e.clipboardData;
  if (!data) return;
  const html = data.getData('text/html');
  const plain = data.getData('text/plain');
  const result = convertPaste(html, plain, (h) => new DOMParser().parseFromString(h, 'text/html').body);
  if (!result.converted) return; // let the browser paste plain text natively
  e.preventDefault();
  insertText(result.text);
  toast('Formatting converted for LinkedIn');
});

editor.addEventListener('keydown', (e) => {
  const mod = isMac ? e.metaKey : e.ctrlKey;
  if (!mod || e.altKey) return;
  const k = e.key.toLowerCase();
  const map: Record<string, () => void> = {
    b: () => applyStyleCmd('bold'),
    i: () => applyStyleCmd('italic'),
    u: () => applyStyleCmd('underline'),
    e: () => applyStyleCmd('monospace'),
    z: () => (e.shiftKey ? redo() : undo()),
    y: () => redo(),
  };
  if (e.shiftKey && k === 'x') {
    e.preventDefault();
    return applyStyleCmd('strikethrough');
  }
  if (e.shiftKey && k !== 'z') return;
  const fn = map[k];
  if (fn) {
    e.preventDefault();
    fn();
  }
});

// Toolbar: one delegated listener
document.querySelector('.toolbar')!.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('button');
  if (!btn) return;
  const d = btn.dataset;
  if (d.style) applyStyleCmd(d.style as Style);
  else if (d.case) caseCmd(d.case as CaseMode);
  else if (d.list) listCmd(d.list);
  else if (d.insert) insertBlock(SNIPPETS[d.insert]);
  else if (d.action === 'undo') undo();
  else if (d.action === 'redo') redo();
  else if (d.action === 'clear-format') clearFormatCmd();
  else if (d.action === 'quote') quoteCmd();
  else if (d.action === 'emoji') openEmoji();
  btn.closest('details')?.removeAttribute('open');
});

// Keep the editor selection when clicking toolbar buttons
document.querySelector('.toolbar')!.addEventListener('mousedown', (e) => {
  if ((e.target as HTMLElement).closest('button')) e.preventDefault();
});

// Dropdown menus: one open at a time, close on outside click / Escape
const menus = document.querySelectorAll<HTMLDetailsElement>('.tb-menu');
menus.forEach((m) =>
  m.addEventListener('toggle', () => {
    if (m.open) menus.forEach((o) => o !== m && o.removeAttribute('open'));
  }),
);
document.addEventListener('click', (e) => {
  menus.forEach((m) => !m.contains(e.target as Node) && m.removeAttribute('open'));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') menus.forEach((m) => m.removeAttribute('open'));
});

// Preview
seeMore.addEventListener('click', () => {
  expanded = !expanded;
  updateFold();
});
document.querySelectorAll<HTMLButtonElement>('[data-device]').forEach((b) => {
  if (b.tagName !== 'BUTTON') return;
  b.addEventListener('click', () => {
    document.querySelectorAll('.segmented [data-device]').forEach((o) => o.setAttribute('aria-checked', String(o === b)));
    device.dataset.device = b.dataset.device;
    expanded = false;
    updateFold();
  });
});
new ResizeObserver(() => updateFold()).observe(device);

$('copyBtn').addEventListener('click', copyPost);

// Clear
const confirmDialog = $<HTMLDialogElement>('confirmDialog');
$('clearBtn').addEventListener('click', () => {
  if (!editor.value) return;
  confirmDialog.returnValue = '';
  confirmDialog.showModal();
});
confirmDialog.addEventListener('close', () => {
  if (confirmDialog.returnValue === 'confirm') {
    edit(0, editor.value.length, '', 'end');
    toast('Cleared. Undo brings it back');
  }
});

// Templates
document.querySelectorAll<HTMLButtonElement>('[data-template]').forEach((b) =>
  b.addEventListener('click', () => {
    const t = TEMPLATES.find((x) => x.id === b.dataset.template);
    if (!t) return;
    edit(0, editor.value.length, t.body, 'end');
    editor.setSelectionRange(0, 0);
    editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    toast(`${t.label} template loaded`);
  }),
);

// Emoji dialog
const emojiDialog = $<HTMLDialogElement>('emojiDialog');
let caret: [number, number] = [0, 0];
function openEmoji() {
  caret = [editor.selectionStart, editor.selectionEnd];
  emojiDialog.showModal();
}
emojiDialog.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (t === emojiDialog || t.closest('[data-close]')) return emojiDialog.close();
  const tab = t.closest<HTMLElement>('[data-tab]');
  if (tab) {
    emojiDialog.querySelectorAll('[data-tab]').forEach((o) => o.setAttribute('aria-selected', String(o === tab)));
    emojiDialog.querySelectorAll<HTMLElement>('.emoji-grid').forEach((g) => (g.hidden = g.id !== `eg-${tab.dataset.tab}`));
    return;
  }
  const em = t.closest<HTMLElement>('[data-emoji]');
  if (!em) return;
  editor.setSelectionRange(...caret);
  insertText(em.dataset.emoji!);
  caret = [editor.selectionStart, editor.selectionEnd];
  if ((e as MouseEvent).shiftKey) toast(`Inserted ${em.dataset.emoji}`);
  else emojiDialog.close();
});

// Theme
$('themeBtn').addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.dataset.theme ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  store.set('lf-theme', next);
});

// Platform-correct shortcut labels
if (isMac) {
  document.querySelectorAll<HTMLElement>('[data-tip]').forEach((el) => (el.dataset.tip = el.dataset.tip!.replace('Ctrl', '⌘')));
  document.querySelectorAll('kbd').forEach((k) => k.textContent === 'Ctrl' && (k.textContent = '⌘'));
  editor.placeholder = editor.placeholder.replace('Ctrl+B', '⌘B');
}

// Never lose the last keystrokes to the autosave debounce
addEventListener('pagehide', () => store.set(DRAFT_KEY, editor.value));

// Restore draft
const draft = store.get(DRAFT_KEY);
if (draft) {
  editor.value = draft;
  history.reset(snap());
}
changed();
