import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { DEFAULT_LANG, isLang, type Dict, type Lang } from './index'
import { I18nContext, type I18nValue } from './context'
import { uz } from './uz'
import { ru } from './ru'
import { en } from './en'

const DICTS: Record<Lang, Dict> = { uz: uz as unknown as Dict, ru, en }
const STORAGE_KEY = 'ucare.lang'

function readStored(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const v = window.localStorage.getItem(STORAGE_KEY)
  return isLang(v) ? v : DEFAULT_LANG
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStored)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // private mode — just don't remember the choice
    }
  }, [])

  // Keep <html lang> in sync, including on mount: index.html ships with the
  // default language, so a restored choice would otherwise leave the attribute
  // pointing at the wrong locale.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: DICTS[lang] }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
