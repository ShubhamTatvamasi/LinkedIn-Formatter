import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toggleStyle, hasStyle, toPlain, changeCase, applyStyle, LETTER_STYLES } from '../src/lib/unicode.ts';

test('bold maps letters and digits', () => {
  assert.equal(applyStyle('Hello 2026', 'bold'), '𝗛𝗲𝗹𝗹𝗼 𝟮𝟬𝟮𝟲');
});

test('fraktur and double-struck use Letterlike exceptions', () => {
  assert.equal(applyStyle('CHIRZ', 'fraktur'), 'ℭℌℑℜℨ');
  assert.equal(applyStyle('Y', 'fraktur'), '𝔜');
  assert.equal(applyStyle('CHNPQRZ', 'doubleStruck'), 'ℂℍℕℙℚℝℤ');
});

test('every style round-trips to plain text', () => {
  const s = 'The quick brown fox JUMPS over 13 lazy dogs';
  for (const style of LETTER_STYLES) assert.equal(toPlain(applyStyle(s, style)), s, style);
});

test('toggle applies, then removes', () => {
  const once = toggleStyle('hi there', 'bold');
  assert.equal(once, '𝗵𝗶 𝘁𝗵𝗲𝗿𝗲');
  assert.equal(toggleStyle(once, 'bold'), 'hi there');
});

test('switching letter style replaces, not stacks', () => {
  assert.equal(toggleStyle(applyStyle('abc', 'bold'), 'italic'), applyStyle('abc', 'italic'));
});

test('partially styled text gets fully styled', () => {
  const mixed = applyStyle('ab', 'bold') + 'cd';
  assert.equal(hasStyle(mixed, 'bold'), false);
  assert.equal(toggleStyle(mixed, 'bold'), applyStyle('abcd', 'bold'));
});

test('underline skips spaces and toggles off', () => {
  const u = toggleStyle('a b', 'underline');
  assert.equal(u, 'a̲ b̲');
  assert.equal(toggleStyle(u, 'underline'), 'a b');
});

test('underline layers on bold and survives a letter-style swap', () => {
  const u = toggleStyle(applyStyle('ab', 'bold'), 'underline');
  assert.equal(toPlain(u), 'ab');
  const swapped = toggleStyle(u, 'italic');
  assert.ok(swapped.includes('̲'));
  assert.equal(toPlain(swapped), 'ab');
});

test('emoji and keycaps are preserved', () => {
  assert.equal(applyStyle('1️⃣ go 🚀', 'bold'), '1️⃣ 𝗴𝗼 🚀');
  assert.equal(toggleStyle('👍🏽 ok', 'underline'), '👍🏽̲ o̲k̲');
});

test('case changes work on styled text', () => {
  assert.equal(changeCase(applyStyle('hello world', 'bold'), 'upper'), 'HELLO WORLD');
  assert.equal(changeCase('the end. a new start', 'sentence'), 'The end. A new start');
  assert.equal(changeCase('the long-term plan', 'title'), 'The Long-Term Plan');
});
