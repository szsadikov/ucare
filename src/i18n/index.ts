import { uz } from './uz'

/** Order here is the order shown in the language switcher. */
export const LANGS = ['uz', 'ru', 'en'] as const

export type Lang = (typeof LANGS)[number]

/**
 * The dictionary shape is defined by Uzbek, the default language.
 * `-readonly` strips the `as const`, so the other dictionaries can be plain
 * object literals with the same keys while values stay widened to `string`.
 */
export type Dict = {
  -readonly [K in keyof typeof uz]: Mutable<(typeof uz)[K]>
}

type Mutable<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Mutable<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: Mutable<T[K]> }
      : T

export const DEFAULT_LANG: Lang = 'uz'

/** Labels on the switcher pills. */
export const LANG_LABELS: Record<Lang, string> = { uz: 'UZ', ru: 'RU', en: 'EN' }

export function isLang(v: unknown): v is Lang {
  return typeof v === 'string' && (LANGS as readonly string[]).includes(v)
}

export { uz } from './uz'
export { ru } from './ru'
export { en } from './en'
export { I18nProvider } from './I18nProvider'
export { useI18n } from './context'
