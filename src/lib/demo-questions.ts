// Meta Prompt Studio web demo — question copy.
//
// Phil-locked copy (Oct 23, via Elm) — verbatim. Do not invent or paraphrase wording.
// Answers are shuffled on screen and their A/B/C, X/Y/Z, 1/2/3 codes are never shown.
// isPlaceholder() remains as a guard in case a TODO_PHIL_LOCK line is ever reintroduced.
//
// Answer order per question = axis option order (index 0 = healthy):
//   Morality:  A Selfless / B Contractual / C Selfish
//   Authority: X Valiant  / Y Functional  / Z Anarchic
//   Integrity: 1 Principled / 2 Pragmatic / 3 Volatile
import type { AxisId } from './morl-axes'

export const TODO_PHIL_LOCK = 'TODO_PHIL_LOCK'

export type DemoQuestion = {
  axis: AxisId
  stem: string
  /** Exactly three answers, aligned to the axis option order. */
  answers: readonly [string, string, string]
}

export const DEMO_QUESTIONS: readonly DemoQuestion[] = [
  {
    axis: 'morality',
    stem: 'When your character makes a decision that affects other people, what weighs on them most?',
    answers: [
      'What the other person needs, even if it costs them something.', // A Selfless
      "What's fair to everyone.", // B Contractual
      "What's in it for them.", // C Selfish
    ],
  },
  {
    axis: 'authority',
    stem: 'How does your character relate to rules and the people who enforce them?',
    answers: [
      'They follow them without exception, and expect the people in charge to do the same.', // X Valiant
      "They work within the system as long as it works for them, and quietly work around it when it doesn't.", // Y Functional
      'Independence and autonomy above all. Inherently rebellious and defiant by nature.', // Z Anarchic
    ],
  },
  {
    axis: 'integrity',
    stem: 'When your character gives their word, what can people expect?',
    answers: [
      'They do what they say and say what they do, and stand by their word without question.', // 1 Principled
      "Things change, but they're honest about it and make it up.", // 2 Pragmatic
      "What they do is anyone's guess, depending on how they feel when the time comes.", // 3 Volatile
    ],
  },
]

export const isPlaceholder = (s: string) => s.startsWith(TODO_PHIL_LOCK)
