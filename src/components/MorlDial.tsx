'use client'

import type { KeyboardEvent } from 'react'
import type { Axis } from '@/lib/morl-axes'

// Web take on the app's Health rail RotaryDialLayout: lower semicircle only,
// three detents left -> right. Click a detent or its label; no drag gestures.
const W = 340
const H = 158
const CX = W / 2
const CY = 22
const R_TRACK = 84
const R_LABEL = 98
// Degrees, screen space (0 = right, 90 = straight down). Left -> right across the bottom half.
const ANGLES = [145, 90, 35] as const
// Labels sit just outside each detent, pushed away from the dial so they never cover it.
const LABEL_ANCHOR = ['translate(-100%, -50%)', 'translate(-50%, 0)', 'translate(0, -50%)'] as const

const pt = (deg: number, r: number) => {
  const rad = (deg * Math.PI) / 180
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) }
}

type Props = { axis: Axis; value: number | null; onChange: (index: number) => void }

export function MorlDial({ axis, value, onChange }: Props) {
  const start = pt(180, R_TRACK)
  const end = pt(0, R_TRACK)
  const onKey = (e: KeyboardEvent) => {
    const cur = value ?? 0
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); onChange(Math.max(0, cur - 1)) }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); onChange(Math.min(2, cur + 1)) }
  }
  return (
    <div className={`morl-dial${value == null ? ' is-unset' : ''}`}>
      <p className="morl-dial-title">{axis.title}</p>
      <div className="morl-dial-face" style={{ width: W, height: H }} role="radiogroup" aria-label={axis.title} onKeyDown={onKey}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          {/* lower semicircle track */}
          <path className="morl-dial-track" d={`M ${start.x} ${start.y} A ${R_TRACK} ${R_TRACK} 0 0 0 ${end.x} ${end.y}`} />
          <path className="morl-dial-track-inner" d={`M ${CX - R_TRACK + 18} ${CY} A ${R_TRACK - 18} ${R_TRACK - 18} 0 0 0 ${CX + R_TRACK - 18} ${CY}`} />
          {ANGLES.map((deg, i) => {
            const p = pt(deg, R_TRACK)
            const lit = value === i
            return (
              <circle key={i} className={`morl-dial-detent${lit ? ' is-lit' : ''}`} cx={p.x} cy={p.y} r={lit ? 9 : 7} onClick={() => onChange(i)} />
            )
          })}
          {value != null && (
            <g className="morl-dial-needle" style={{ transform: `rotate(${ANGLES[value]}deg)`, transformOrigin: `${CX}px ${CY}px` }}>
              <line x1={CX} y1={CY} x2={CX + R_TRACK - 14} y2={CY} />
            </g>
          )}
          <circle className="morl-dial-hub" cx={CX} cy={CY} r={10} />
        </svg>
        {axis.options.map((opt, i) => {
          const p = pt(ANGLES[i], R_LABEL)
          const lit = value === i
          return (
            <button
              key={opt.code}
              type="button"
              role="radio"
              aria-checked={lit}
              tabIndex={lit || (value == null && i === 0) ? 0 : -1}
              className={`morl-dial-label${lit ? ' is-lit' : ''}`}
              style={{ left: p.x, top: p.y, transform: LABEL_ANCHOR[i] }}
              onClick={() => onChange(i)}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
