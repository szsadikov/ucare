import type { CategoryKey } from './categories'

/** Categories on the employee screen; `note` keys into the dictionary. */
export const EMPLOYEE_CATS: {
  key: CategoryKey
  open: boolean
  note: 'daily' | 'from6' | 'from12' | 'from24'
}[] = [
  { key: 'food', open: true, note: 'daily' },
  { key: 'coffee', open: true, note: 'daily' },
  { key: 'fitness', open: true, note: 'from6' },
  { key: 'edu', open: true, note: 'from6' },
  { key: 'pharm', open: false, note: 'from12' },
  { key: 'med', open: false, note: 'from24' },
]

/** Bottom tab bar of the app. */
export const EMPLOYEE_TABS = ['home', 'layout-grid', 'receipt', 'user']

/** Partner card with the payment QR code. */
export const EMPLOYEE_PARTNER = {
  name: 'Zamin Fitness',
  initials: 'ZF',
  discount: '−25%',
  code: 'UC-4821-9930',
}

/** Remaining limit, shown on the employee card and in the landing hero. */
export const EMPLOYEE_BALANCE = '760 000'
export const EMPLOYEE_BALANCE_PCT = '49%'
