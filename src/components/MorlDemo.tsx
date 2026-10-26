'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AXES, morlKey, type AxisId, type Selection } from '@/lib/morl-axes'
import { DEMO_QUESTIONS, isPlaceholder } from '@/lib/demo-questions'
import { loadMorlCards } from '@/lib/morl-unscramble'
import { MorlDial } from './MorlDial'
import { NewsletterForm } from './NewsletterForm'

type Theme = 'auto' | 'paper' | 'chalk'
const EMPTY: Selection = { morality: null, authority: null, integrity: null }

export function MorlDemo() {
  const [sel, setSel] = useState<Selection>(EMPTY)
  const [step, setStep] = useState(0)
  const [theme, setTheme] = useState<Theme>('auto')
  const cardRef = useRef<HTMLElement>(null)
  // On-screen answer order is shuffled per visit (client-only, so SSR/hydration stay stable).
  const [order, setOrder] = useState<number[][] | null>(null)
  useEffect(() => {
    setOrder(DEMO_QUESTIONS.map(() => {
      const o = [0, 1, 2]
      for (let k = o.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [o[k], o[j]] = [o[j], o[k]] }
      return o
    }))
  }, [])

  const key = morlKey(sel)
  // Unscrambled lazily in the browser, only once a full key exists.
  const card = useMemo(() => (key ? loadMorlCards().get(key) ?? null : null), [key])
  const answered = DEMO_QUESTIONS.filter((q) => sel[q.axis] != null).length

  // Question path: answer -> set axis -> advance to next unanswered question.
  const answer = (axis: AxisId, index: number) => {
    const next = { ...sel, [axis]: index }
    setSel(next)
    const nextOpen = DEMO_QUESTIONS.findIndex((q) => next[q.axis] == null)
    if (nextOpen !== -1) setStep(nextOpen)
    else if (!key) requestAnimationFrame(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }))
  }

  // Dial path: turning any dial goes live immediately; untouched axes start at healthy (A / X / 1).
  const turn = (axis: AxisId, index: number) => {
    setSel((s) => ({
      morality: s.morality ?? 0,
      authority: s.authority ?? 0,
      integrity: s.integrity ?? 0,
      [axis]: index,
    }))
  }

  const reset = () => { setSel(EMPTY); setStep(0) }
  const q = DEMO_QUESTIONS[step]

  return (
    <section className="morl-demo" data-theme={theme} aria-label="Moral Architecture demo">
      <div className="morl-top">
        <div className="morl-top-head">
          <p className="eyebrow morl-eyebrow">Moral Architecture · 3 axes · 27 cards</p>
          <div className="morl-theme" role="group" aria-label="Board">
            {(['paper', 'chalk'] as const).map((t) => (
              <button key={t} type="button" aria-pressed={theme === t} className={theme === t ? 'is-on' : ''} onClick={() => setTheme(theme === t ? 'auto' : t)}>
                {t === 'paper' ? 'Paper' : 'Chalkboard'}
              </button>
            ))}
          </div>
        </div>

        {/* Path 1: three questions */}
        <div className="morl-questions">
          <ol className="morl-steps" aria-label="Questions">
            {DEMO_QUESTIONS.map((dq, i) => (
              <li key={dq.axis}>
                <button type="button" className={`morl-step${i === step ? ' is-current' : ''}${sel[dq.axis] != null ? ' is-done' : ''}`} onClick={() => setStep(i)} aria-current={i === step ? 'step' : undefined}>
                  <span>{i + 1}</span> {AXES[i].title}
                </button>
              </li>
            ))}
            <li className="morl-progress" aria-live="polite">{answered}/3 answered</li>
          </ol>
          <fieldset className="morl-q" key={q.axis}>
            <legend className={isPlaceholder(q.stem) ? 'is-todo' : ''}>{q.stem}</legend>
            <div className="morl-answers" style={order ? undefined : { visibility: 'hidden' }}>
              {(order?.[step] ?? [0, 1, 2]).map((i) => ({ a: q.answers[i], i })).map(({ a, i }) => (
                <button
                  key={i}
                  type="button"
                  role="radio"
                  aria-checked={sel[q.axis] === i}
                  className={`morl-answer${sel[q.axis] === i ? ' is-lit' : ''}${isPlaceholder(a) ? ' is-todo' : ''}`}
                  onClick={() => answer(q.axis, i)}
                >
                  {a}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      {/* Path 2: dials (bottom half) + the one live card beside them */}
      <div className={`morl-bottom${card ? ' is-revealed' : ''}`}>
        <div className="morl-dials">
          <p className="morl-dials-hint">Or turn the dials. Click a position.</p>
          {AXES.map((axis) => (
            <MorlDial key={axis.id} axis={axis} value={sel[axis.id]} onChange={(i) => turn(axis.id, i)} />
          ))}
          {(sel.morality != null || sel.authority != null || sel.integrity != null) && (
            <button type="button" className="morl-reset" onClick={reset}>Start over</button>
          )}
        </div>

        <article ref={cardRef} className={`morl-card${card ? '' : ' is-empty'}`} data-key={card?.key} aria-live="polite">
          {card ? (
            <>
              <h3>{card.name}</h3>
              <div className="morl-card-body">
                {card.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </>
          ) : (
            <p className="morl-card-placeholder">Answer all three questions, or turn a dial, and the card lands here.</p>
          )}
        </article>
      </div>

      {card && (
        <div className="morl-waitlist">
          <h3>Tell me when the full system opens</h3>
          <NewsletterForm submitLabel="Join the waitlist" />
        </div>
      )}
    </section>
  )
}
