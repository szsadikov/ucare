import { useNavigate } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { HERO_MINI, TRUST_VALUES } from '../../mock/landing'
import { EMPLOYEE_BALANCE, EMPLOYEE_BALANCE_PCT } from '../../mock/employee'
import { category } from '../../mock/derive'
import { Icon } from '../ds'

/** Hero, the figures strip and the market research block. */
export function Hero() {
  const { t } = useI18n()
  const { l } = useShell()
  const navigate = useNavigate()

  return (
    <>
      <section
        style={{
          background: 'var(--brand-gradient)',
          padding: l.padHero,
          display: 'grid',
          gridTemplateColumns: l.heroCols,
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 660 }}>
          <span
            style={{
              font: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              textTransform: 'uppercase',
              color: 'var(--on-brand-72)',
            }}
          >
            {t.heroOverline}
          </span>
          <h1
            style={{
              font: l.heroFont,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--on-brand)',
              margin: 0,
              textWrap: 'pretty',
              overflowWrap: 'break-word',
            }}
          >
            {t.heroTitle}
          </h1>
          <p
            style={{
              font: 'var(--text-body-l)',
              color: 'var(--on-brand-86)',
              margin: 0,
              maxWidth: 560,
              textWrap: 'pretty',
            }}
          >
            {t.heroSub}
          </p>
          <div
            style={{ display: 'flex', gap: 12, marginTop: 8, flexDirection: l.colDir }}
          >
            <button
              onClick={() => navigate('/app/dashboard')}
              style={{
                height: 48,
                padding: '0 24px',
                border: 0,
                borderRadius: 'var(--radius-md)',
                background: 'var(--on-brand)',
                color: 'var(--blue-800)',
                font: 'var(--text-btn-lg)',
                cursor: 'pointer',
                width: l.ctaW,
              }}
            >
              {t.heroCta}
            </button>
            <button
              onClick={() => navigate('/app/dashboard')}
              style={{
                height: 48,
                padding: '0 24px',
                border: '1px solid var(--on-brand-border-50)',
                borderRadius: 'var(--radius-md)',
                background: 'transparent',
                color: 'var(--on-brand)',
                font: 'var(--text-btn-lg)',
                cursor: 'pointer',
                width: l.ctaW,
              }}
            >
              {t.heroCta2}
            </button>
          </div>
        </div>

        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="overline">{t.heroCardLabel}</span>
            <span className="uc-badge uc-badge--success">{t.active}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <b style={{ font: 'var(--text-amount-l)', letterSpacing: 'var(--tracking-display)' }}>
              {EMPLOYEE_BALANCE}
            </b>
            <span className="body-s text-secondary">UZS · {t.heroCardOf}</span>
          </div>
          <div className="uc-limitbar">
            <i style={{ width: EMPLOYEE_BALANCE_PCT }} />
          </div>
          <div style={{ height: 1, background: 'var(--border)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {HERO_MINI.map((m) => {
              const c = category(m.key, t)
              return (
                <div key={m.key} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      flex: 'none',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--accent-subtle)',
                      color: 'var(--accent)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span style={{ flex: 1, font: 'var(--text-body)' }}>{c.name}</span>
                  <span className="numeric body-s text-secondary">{m.value}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: l.c3,
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {t.heroStatValues.map((value, i) => (
          <div
            key={value}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              padding: l.padStrip,
              borderRight: '1px solid var(--border)',
            }}
          >
            <span
              style={{
                font: 'var(--text-stat)',
                letterSpacing: 'var(--tracking-display)',
                color: 'var(--accent)',
              }}
            >
              {value}
            </span>
            <span className="body-l text-secondary">{t.heroStats[i]}</span>
          </div>
        ))}
      </section>

      <section
        style={{
          padding: l.padStrip2,
          background: 'var(--surface-sunken)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span className="overline">{t.trustOverline}</span>
        <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 32 }}>
          {TRUST_VALUES.map((value, i) => (
            <div key={value} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span
                style={{
                  font: 'var(--text-stat-strong)',
                  letterSpacing: 'var(--tracking-display)',
                  color: 'var(--text-primary)',
                }}
              >
                {value}
              </span>
              <span className="body text-secondary" style={{ textWrap: 'pretty' }}>
                {t.trust[i]}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
