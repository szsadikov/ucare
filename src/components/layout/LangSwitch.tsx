import type { CSSProperties } from 'react'
import { LANGS, LANG_LABELS, useI18n } from '../../i18n'

/**
 * Language switcher. Two treatments: `light` for the landing header and `dark`
 * for the dashboard top bar and the employee screen, where it sits on navy.
 */
export function LangSwitch({
  tone = 'light',
  size = 'sm',
  style,
}: {
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md'
  style?: CSSProperties
}) {
  const { lang, setLang } = useI18n()

  const wrap: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: 4,
    border: `1px solid ${tone === 'dark' ? 'var(--on-brand-border-25)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-full)',
    ...style,
  }

  const pill = (active: boolean): CSSProperties => ({
    height: size === 'md' ? 32 : 28,
    padding: size === 'md' ? '0 14px' : '0 11px',
    border: 0,
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    font: 'var(--text-pill)',
    background: active
      ? tone === 'dark'
        ? 'var(--on-brand-fill-16)'
        : 'var(--accent-subtle)'
      : 'transparent',
    color: active
      ? tone === 'dark'
        ? 'var(--on-brand)'
        : 'var(--accent)'
      : tone === 'dark'
        ? 'var(--on-brand-60)'
        : 'var(--text-secondary)',
  })

  return (
    <span style={wrap}>
      {LANGS.map((code) => (
        <button key={code} onClick={() => setLang(code)} style={pill(lang === code)}>
          {LANG_LABELS[code]}
        </button>
      ))}
    </span>
  )
}
