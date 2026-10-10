export const FAQ: { q: string; a: string }[] = [
  {
    q: 'How do I make text bold on LinkedIn?',
    a: 'LinkedIn posts are plain text, so there is no bold button. Select text in the editor and press Ctrl+B (Cmd+B on Mac) or click Bold. The letters are swapped for Unicode bold characters that survive copy and paste into LinkedIn. Press it again to remove the bold.',
  },
  {
    q: 'Can I paste from ChatGPT, Google Docs or Word?',
    a: 'Yes. Smart Paste reads the rich formatting on your clipboard (bold, italic, code, headings, lists, links) or Markdown such as **bold** and converts it to LinkedIn-ready text automatically.',
  },
  {
    q: 'Where does LinkedIn cut my post with "…more"?',
    a: 'LinkedIn shows roughly the first three lines of a post in the feed, about 200 characters on desktop and fewer on mobile, and blank lines count as lines. The preview clamps your post the same way so you can check that your hook lands above the fold. LinkedIn does not publish an exact rule, so double-check important posts on your phone.',
  },
  {
    q: 'Is Unicode formatting accessible?',
    a: 'Partly. Some screen readers read styled letters one by one or skip them. Use bold and italic for a hook or a few key phrases, never for whole paragraphs or for hashtags, which stop working when styled.',
  },
  {
    q: 'Is my text stored anywhere?',
    a: 'No. Everything runs in your browser. Your draft is saved only to this device\'s local storage so it survives a refresh, and you can clear it at any time.',
  },
  {
    q: 'What is the character limit for a LinkedIn post?',
    a: '3,000 characters. Styled Unicode letters can count as two characters each, so the counter turns amber at 2,500 and red past 3,000.',
  },
];
