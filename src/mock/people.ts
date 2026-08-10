import type { CategoryKey } from './categories'

/**
 * Employees. `dept` and `grade` index into the dictionary arrays,
 * `tenureIndex` picks a string from `peopleTenures`, and `status` drives
 * the badge.
 */
export const PEOPLE: {
  name: string
  dept: number
  grade: number
  tenureIndex: number
  cats: CategoryKey[]
  status: 'ok' | 'inv'
}[] = [
  { name: 'Aziza Rahimova', dept: 1, grade: 2, tenureIndex: 0, cats: ['food', 'coffee', 'fitness', 'edu', 'med'], status: 'ok' },
  { name: 'Bekzod Toʻxtayev', dept: 2, grade: 1, tenureIndex: 1, cats: ['food', 'coffee', 'taxi'], status: 'ok' },
  { name: 'Dilnoza Yoʻldosheva', dept: 3, grade: 2, tenureIndex: 2, cats: ['food', 'coffee', 'fitness', 'edu'], status: 'ok' },
  { name: 'Sardor Qodirov', dept: 1, grade: 3, tenureIndex: 3, cats: ['food', 'coffee', 'fitness', 'edu', 'med'], status: 'ok' },
  { name: 'Malika Ergasheva', dept: 4, grade: 1, tenureIndex: 4, cats: ['food', 'coffee', 'taxi'], status: 'ok' },
  { name: 'Javohir Nazarov', dept: 5, grade: 2, tenureIndex: 5, cats: ['food', 'coffee', 'fitness', 'edu', 'pharm'], status: 'ok' },
  { name: 'Nilufar Karimova', dept: 3, grade: 1, tenureIndex: 6, cats: ['food', 'coffee'], status: 'ok' },
  { name: 'Otabek Yusupov', dept: 1, grade: 1, tenureIndex: 7, cats: ['food', 'coffee'], status: 'ok' },
]
