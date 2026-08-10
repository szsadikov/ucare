import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { Button, Icon } from '../ds'
import { LangSwitch } from '../layout/LangSwitch'

const linkStyle = {
  font: 'var(--text-body)',
  color: 'var(--text-secondary)',
  textDecoration: 'none',
} as const

/** Landing header and its mobile menu. */
export function SiteHeader() {
  const { t } = useI18n()
  const { mob, l } = useShell()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const open = mob && menuOpen

  const links = [
    { href: '#how', label: t.navHow },
    { href: '#cats', label: t.navCats },
    { href: '#partners', label: t.partnersOverline },
    { href: '#pilot', label: t.navPilot },
  ]

  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
          padding: l.padHdr,
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
        }}
      >
        <img
          src="/logo-primary.svg"
          alt="uCare"
          style={{ height: 'var(--logo-landing-h)', width: 'auto' }}
        />
        <nav
          style={{
            display: l.navD,
            alignItems: 'center',
            gap: 28,
            marginLeft: 24,
            marginRight: 'auto',
          }}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </a>
          ))}
        </nav>
        <LangSwitch style={{ display: l.navD }} />
        <span style={{ display: l.navD }}>
          <Button onClick={() => navigate('/app/dashboard')}>{t.login}</Button>
        </span>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="menu"
          style={{
            display: l.burgerD,
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            marginLeft: 'auto',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--surface)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          <Icon name="menu" size={24} />
        </button>
      </header>

      {open && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: l.padStrip2,
            borderBottom: '1px solid var(--border)',
            background: 'var(--surface)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                font: 'var(--text-body-l)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <LangSwitch size="md" style={{ alignSelf: 'flex-start' }} />
          <button
            onClick={() => navigate('/app/dashboard')}
            className="uc-btn uc-btn--block uc-btn--lg"
          >
            {t.login}
          </button>
        </div>
      )}
    </>
  )
}
