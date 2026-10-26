// D6-MORL grid: three axes -> one key -> one card. A, X, 1 = healthy.
export type MoralityCode = 'A' | 'B' | 'C'
export type AuthorityCode = 'X' | 'Y' | 'Z'
export type IntegrityCode = '1' | '2' | '3'
export type AxisId = 'morality' | 'authority' | 'integrity'

export type AxisOption<C extends string = string> = { code: C; label: string }
export type Axis<C extends string = string> = { id: AxisId; title: string; options: readonly [AxisOption<C>, AxisOption<C>, AxisOption<C>] }

export const MORALITY: Axis<MoralityCode> = {
  id: 'morality', title: 'Morality',
  options: [{ code: 'A', label: 'Selfless' }, { code: 'B', label: 'Contractual' }, { code: 'C', label: 'Selfish' }],
}
export const AUTHORITY: Axis<AuthorityCode> = {
  id: 'authority', title: 'Authority',
  options: [{ code: 'X', label: 'Valiant' }, { code: 'Y', label: 'Functional' }, { code: 'Z', label: 'Anarchic' }],
}
export const INTEGRITY: Axis<IntegrityCode> = {
  id: 'integrity', title: 'Integrity',
  options: [{ code: '1', label: 'Principled' }, { code: '2', label: 'Pragmatic' }, { code: '3', label: 'Volatile' }],
}
export const AXES = [MORALITY, AUTHORITY, INTEGRITY] as const

/** Selection per axis as an option index 0..2 (0 = healthy), or null if not chosen yet. */
export type Selection = Record<AxisId, number | null>

export function morlKey(sel: Selection): string | null {
  if (sel.morality == null || sel.authority == null || sel.integrity == null) return null
  return `D6-MORL-${MORALITY.options[sel.morality].code}${AUTHORITY.options[sel.authority].code}${INTEGRITY.options[sel.integrity].code}`
}
