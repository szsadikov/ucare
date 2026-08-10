/** Turnover per department; `dept` indexes the `depts` array in the dictionary. */
export const TURNOVER: { dept: number; value: number; width: string }[] = [
  { dept: 1, value: 14.2, width: '71%' },
  { dept: 2, value: 24.6, width: '100%' },
  { dept: 3, value: 18.1, width: '74%' },
  { dept: 4, value: 19.8, width: '80%' },
  { dept: 5, value: 9.4, width: '38%' },
]

/** Company-wide baseline — bars above it are drawn in the warning colour. */
export const TURNOVER_BASELINE = 18.4

/**
 * Analytics tiles: the value and the colour of the delta line. Captions live in
 * the dictionary.
 *
 * `value` is a number when it needs the locale's decimal separator, a string
 * when it is already formatted, and `null` for the utilisation tile, which is
 * computed from the budget at render time.
 */
export const ANALYTICS_TILES: {
  value: number | string | null
  deltaColor: 'muted' | 'success'
}[] = [
  { value: TURNOVER_BASELINE, deltaColor: 'muted' },
  { value: null, deltaColor: 'success' },
  { value: '90%', deltaColor: 'muted' },
  { value: '47', deltaColor: 'success' },
]

/** Activations per month, plotted against `DYNAMICS_SCALE`. */
export const DYNAMICS = [12, 24, 33, 41, 49, 54]
export const DYNAMICS_SCALE = 60
