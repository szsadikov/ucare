import type { CategoryKey } from './categories'

/** Mini rows inside the hero card. */
export const HERO_MINI: { key: CategoryKey; value: string }[] = [
  { key: 'fitness', value: '−25%' },
  { key: 'food', value: '−15%' },
  { key: 'edu', value: '−20%' },
]

/** Figures in the market research strip. */
export const TRUST_VALUES = ['6', '7–20 %', '4 / 6']

/** Glyphs for the "why the package fails" cards. */
export const PROBLEM_ICONS = ['table', 'trending-down', 'user-x']

/** Step numbers. */
export const STEP_NUMBERS = ['01', '02', '03']

/** Glyphs for the objection cards. */
export const OBJECTION_ICONS = ['wallet', 'repeat', 'trending-up']

/** Glyphs for the partners block. */
export const PARTNER_POINT_ICONS = ['receipt', 'users', 'megaphone']

/** Addresses shown in the dashboard screen previews. */
export const SCREEN_CAPS: { kind: 'rules' | 'limits' | 'analytics'; url: string }[] = [
  { kind: 'rules', url: 'ucare.uz/hr/rules' },
  { kind: 'limits', url: 'ucare.uz/hr/limits' },
  { kind: 'analytics', url: 'ucare.uz/hr/analytics' },
]

/** Footer contacts. */
export const CONTACTS = {
  email: 'info@ucare.uz',
  phone: '+998 97 773 44 33',
}
