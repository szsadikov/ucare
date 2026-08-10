import type { CategoryKey } from './categories'

/** An access rule: department, grade, tenure index, categories and reach. */
export type Rule = {
  id: number
  dept: number
  grade: number
  tenure: number
  cats: CategoryKey[]
  people: number
}

/** The rule set the dashboard starts with. */
export const RULES: Rule[] = [
  { id: 1, dept: 1, grade: 2, tenure: 2, cats: ['fitness', 'edu'], people: 18 },
  { id: 2, dept: 0, grade: 0, tenure: 4, cats: ['med'], people: 23 },
  { id: 3, dept: 2, grade: 1, tenure: 1, cats: ['taxi', 'coffee'], people: 12 },
  { id: 4, dept: 0, grade: 0, tenure: 0, cats: ['food', 'coffee'], people: 54 },
]

/** The tenure ladder: at how many months each category unlocks. */
export const LADDER: { key: CategoryKey; months: number }[] = [
  { key: 'food', months: 0 },
  { key: 'coffee', months: 0 },
  { key: 'taxi', months: 3 },
  { key: 'fitness', months: 6 },
  { key: 'edu', months: 6 },
  { key: 'pharm', months: 12 },
  { key: 'med', months: 24 },
]

/** Category by access level matrix. */
export const ACCESS_MATRIX: Record<CategoryKey, [number, number, number]> = {
  food: [1, 1, 1],
  coffee: [1, 1, 1],
  taxi: [1, 1, 1],
  fitness: [0, 1, 1],
  edu: [0, 1, 1],
  pharm: [0, 1, 1],
  med: [0, 0, 1],
}

/** Values the new-rule form opens with. */
export const NEW_RULE_DEFAULTS = {
  dept: 1,
  grade: 2,
  tenure: 2,
  cats: ['fitness'] as CategoryKey[],
}
