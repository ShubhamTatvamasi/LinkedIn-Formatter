# LinkedIn Formatter

Format LinkedIn posts with Unicode bold, italic and other styles, lists and emojis, then check a live feed preview that shows where LinkedIn's "…more" cut lands.

**[Open the formatter →](https://shubhamtatvamasi.com/LinkedIn-Formatter/)**

## Features

- **Text styles that toggle**: bold, italic, bold italic, underline, strikethrough, monospace, plus script, fraktur and double-struck. Apply a style a second time to remove it. With no selection, the style applies to the word under the cursor.
- **Smart paste**: rich text from ChatGPT, Google Docs, Word and web pages, as well as Markdown (`**bold**`, `# heading`, `- list`, `` `code` ``, links), converts to LinkedIn-ready text.
- **Feed preview**: desktop and mobile cards clamp at three lines like the LinkedIn feed, so you can see what readers get before they click "…more".
- **Lists**: bullets, numbers, checks and arrows. Clicking the same list type again removes it.
- **Case tools**, dividers, quotes, and an emoji and symbol picker.
- **Templates**: eight post structures (listicle, story, launch, hiring and more).
- **Undo/redo**, autosaved draft (stored only in your browser), dark mode, and an accessibility hint when too much text is styled.

## Shortcuts

| Action | Windows/Linux | Mac |
| --- | --- | --- |
| Bold | Ctrl+B | ⌘B |
| Italic | Ctrl+I | ⌘I |
| Underline | Ctrl+U | ⌘U |
| Strikethrough | Ctrl+Shift+X | ⌘⇧X |
| Monospace | Ctrl+E | ⌘E |
| Undo / Redo | Ctrl+Z / Ctrl+Shift+Z | ⌘Z / ⌘⇧Z |

## Development

Requires Node 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321/LinkedIn-Formatter/
npm test         # unit tests for the formatting and paste logic
npm run build    # type-check and build to dist/
```

### Project layout

```
src/
  lib/          unicode.ts (style maps), paste.ts (smart paste), history.ts, templates, emoji, FAQ
  scripts/      app.ts, the client-side editor logic
  components/   Toolbar, Preview, EmojiDialog, Icon (Lucide icons inlined at build time)
  layouts/      Base.astro (SEO meta, JSON-LD, theme bootstrap)
  pages/        index.astro, 404.astro
tests/          node:test unit tests
```

## Deployment

On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs the unit tests, builds the site with `withastro/action` and publishes it to GitHub Pages. The repository's Pages source must be set to **GitHub Actions**. `astro.config.mjs` sets `base: '/LinkedIn-Formatter'` because the site is served as a project page under the custom domain.

## Tech

[Astro](https://astro.build) static output, plain TypeScript, no UI framework and no runtime CDN dependencies.

---

Not affiliated with or endorsed by LinkedIn Corporation.
