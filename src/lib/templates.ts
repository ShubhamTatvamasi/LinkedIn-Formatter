import { applyStyle } from './unicode.ts';

const b = (s: string) => applyStyle(s, 'bold');
const i = (s: string) => applyStyle(s, 'italic');

export interface Template {
  id: string;
  label: string;
  icon: string;
  body: string;
}

export const TEMPLATES: Template[] = [
  {
    id: 'hook-list',
    label: 'Listicle',
    icon: 'list-ordered',
    body: `${b('7 lessons from [X years] of [topic]')}

Most people get #3 wrong.

1. [Lesson one]
2. [Lesson two]
3. [Lesson three]
4. [Lesson four]
5. [Lesson five]
6. [Lesson six]
7. [Lesson seven]

Which one would you add? 👇

#[topic] #learning`,
  },
  {
    id: 'story',
    label: 'Story',
    icon: 'book-open',
    body: `[A short, surprising first line.]

[Set the scene in one or two sentences.]

Then [the turning point].

Here's what I learned:

→ [Takeaway one]
→ [Takeaway two]
→ [Takeaway three]

${i('[One-line moral of the story.]')}

Have you been through something similar?`,
  },
  {
    id: 'announcement',
    label: 'Announcement',
    icon: 'megaphone',
    body: `📢 ${b('Big news:')} [what's happening]

[Why it matters, in one sentence.]

What this means:
• [Point one]
• [Point two]
• [Point three]

Huge thanks to [people] for making it happen 🙏

#announcement`,
  },
  {
    id: 'launch',
    label: 'Product launch',
    icon: 'rocket',
    body: `🚀 ${b('Today we launched [product].')}

The problem: [pain your audience feels].

The fix: [one-line description].

✅ [Benefit one]
✅ [Benefit two]
✅ [Benefit three]

Try it here: [link]

Feedback welcome, good or bad.`,
  },
  {
    id: 'achievement',
    label: 'Milestone',
    icon: 'trophy',
    body: `🏆 ${b('[Milestone reached]')}

[Where you started, in one line.]

What got me here:
✓ [Habit or decision]
✓ [Habit or decision]
✓ [Habit or decision]

Grateful to [people] for the support along the way.

#milestone`,
  },
  {
    id: 'question',
    label: 'Question',
    icon: 'message-circle-question',
    body: `${b('Quick question for [audience]:')}

[Your question?]

I've seen both sides:

A) [Option A]
B) [Option B]

Where do you land, and why? 👇`,
  },
  {
    id: 'hiring',
    label: 'Hiring',
    icon: 'briefcase',
    body: `${b("We're hiring: [Role]")} 💼

📍 [Location / Remote]
🕒 [Full-time / Contract]

You'll:
• [Responsibility]
• [Responsibility]

You have:
• [Requirement]
• [Requirement]

Apply: [link], or DM me. Referrals appreciated ♻️

#hiring`,
  },
  {
    id: 'event',
    label: 'Event',
    icon: 'calendar',
    body: `📅 ${b('[Event name]')}

📍 [Where]
🗓️ [Date]
⏰ [Time + timezone]

What you'll get:
• [Benefit one]
• [Benefit two]

Register: [link]

#event`,
  },
];
