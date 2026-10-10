import { test } from 'node:test';
import assert from 'node:assert/strict';
import { markdownToUnicode } from '../src/lib/paste.ts';
import { applyStyle } from '../src/lib/unicode.ts';

const B = (s: string) => applyStyle(s, 'bold');
const I = (s: string) => applyStyle(s, 'italic');
const M = (s: string) => applyStyle(s, 'monospace');

test('plain text is returned untouched', () => {
  const s = 'Just a normal post.\n\nWith two lines, 3*4 = 12 and snake_case_name.';
  assert.equal(markdownToUnicode(s), s);
});

test('bold, italic, code', () => {
  assert.equal(markdownToUnicode('**Big** idea, *small* `step`'), `${B('Big')} idea, ${I('small')} ${M('step')}`);
  assert.equal(markdownToUnicode('__bold__ and _it_'), `${B('bold')} and ${I('it')}`);
});

test('headings, bullets, links', () => {
  const out = markdownToUnicode('## Why it works\n- one\n* two\n[site](https://x.dev)');
  assert.equal(out, `${B('Why it works')}\n• one\n• two\nsite (https://x.dev)`);
});

test('code inside backticks is not re-styled as bold', () => {
  assert.equal(markdownToUnicode('`**not bold**`'), M('**not bold**'));
});

test('fenced code blocks drop the fences', () => {
  assert.equal(markdownToUnicode('```js\nlet a\n```'), M('let a'));
});
