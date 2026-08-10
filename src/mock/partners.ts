import type { CategoryKey } from './categories'

export type PartnerStatus = 'ok' | 'test' | 'draft'

/**
 * Partners. `placeIndex` points at a string in the dictionary's
 * `partnerPlaces` array, since that text is language-dependent.
 */
export const PARTNERS: {
  name: string
  initials: string
  category: CategoryKey
  discount: number
  splitEmp: number
  splitPlat: number
  status: PartnerStatus
  placeIndex: number
}[] = [
  { name: 'Lazzat Kafe', initials: 'LK', category: 'food', discount: 15, splitEmp: 10, splitPlat: 5, status: 'ok', placeIndex: 0 },
  { name: 'Qahva Nuqta', initials: 'QN', category: 'coffee', discount: 12, splitEmp: 8, splitPlat: 4, status: 'ok', placeIndex: 1 },
  { name: 'Zamin Fitness', initials: 'ZF', category: 'fitness', discount: 25, splitEmp: 20, splitPlat: 5, status: 'ok', placeIndex: 2 },
  { name: 'Shifo Med', initials: 'SM', category: 'med', discount: 18, splitEmp: 12, splitPlat: 6, status: 'ok', placeIndex: 3 },
  { name: 'Dorimed', initials: 'DM', category: 'pharm', discount: 10, splitEmp: 7, splitPlat: 3, status: 'ok', placeIndex: 4 },
  { name: 'Bilim Hub', initials: 'BH', category: 'edu', discount: 20, splitEmp: 15, splitPlat: 5, status: 'ok', placeIndex: 5 },
  { name: 'Yo‘lda Taksi', initials: 'YT', category: 'taxi', discount: 10, splitEmp: 6, splitPlat: 4, status: 'test', placeIndex: 6 },
  { name: 'Bozor Fresh', initials: 'BF', category: 'food', discount: 8, splitEmp: 5, splitPlat: 3, status: 'draft', placeIndex: 7 },
]
