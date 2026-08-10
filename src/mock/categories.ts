/** Benefit categories and the Lucide glyph pinned to each one. */
export const CATEGORY_ICONS = {
  food: 'utensils',
  coffee: 'coffee',
  fitness: 'dumbbell',
  med: 'stethoscope',
  pharm: 'pill',
  edu: 'graduation-cap',
  taxi: 'car',
} as const

export type CategoryKey = keyof typeof CATEGORY_ICONS

/** Display order on the landing page and in the access matrix. */
export const CATEGORY_KEYS: CategoryKey[] = [
  'food',
  'coffee',
  'fitness',
  'med',
  'pharm',
  'edu',
  'taxi',
]
