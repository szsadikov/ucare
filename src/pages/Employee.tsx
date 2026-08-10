import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n'
import { useShell } from '../layout/shellContext'
import { EMPLOYEE_CATS, EMPLOYEE_PARTNER, EMPLOYEE_TABS } from '../mock/employee'
import { EMPLOYEE_BALANCE, EMPLOYEE_BALANCE_PCT } from '../mock/employee'
import { category } from '../mock/derive'
import { Icon } from '../components/ds'
import { LangSwitch } from '../components/layout/LangSwitch'
import { makeQr } from './makeQr'

/** Employee app: remaining limit, unlocked categories and QR payment. */
export default function Employee() {
  const { t } = useI18n()
  const { l } = useShell()
  const navigate = useNavigate()
  const [qr, setQr] = useState('')

  useEffect(() => setQr(makeQr()), [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--blue-900)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: l.mGap,
        padding: l.mOuterPad,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          onClick={() => navigate('/app/dashboard')}
          style={{
            height: 36,
            padding: '0 16px',
            border: '1px solid var(--on-brand-border-35)',
            borderRadius: 'var(--radius-md)',
            background: 'transparent',
            color: 'var(--on-brand)',
            font: 'var(--text-pill)',
            cursor: 'pointer',
          }}
        >
          {t.backToCabinet}
        </button>
        <LangSwitch tone="dark" />
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: 390,
          background: 'var(--bg)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text-muted)',
              font: 'var(--text-body-s)',
            }}
          >
            <Icon name="chevron-left" size={20} />
            {t.tgClose}
          </span>
          <span style={{ font: 'var(--text-strong)' }}>uCare</span>
          <span style={{ color: 'var(--text-muted)', display: 'grid', placeItems: 'center' }}>
            <Icon name="more-vertical" size={20} />
          </span>
        </div>

        <div
          style={{ padding: l.mPad, display: 'flex', flexDirection: 'column', gap: l.mPad }}
        >
          <div
            className="uc-card"
            style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <span className="overline">{t.mLimitLabel}</span>
            <b style={{ font: 'var(--text-amount-l)', letterSpacing: 'var(--tracking-display)' }}>
              {EMPLOYEE_BALANCE} UZS
            </b>
            <div className="uc-limitbar">
              <i style={{ width: EMPLOYEE_BALANCE_PCT }} />
            </div>
            <span className="body-s text-muted">{t.mLimitSub}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span className="overline">{t.mCatsLabel}</span>
            <div style={{ display: 'grid', gridTemplateColumns: l.mCatCols, gap: 10 }}>
              {EMPLOYEE_CATS.map((m) => {
                const c = category(m.key, t)
                return (
                  <div
                    key={m.key}
                    className="uc-card"
                    style={{
                      padding: l.mTilePad,
                      display: 'flex',
                      flexDirection: l.mTileDir,
                      alignItems: l.mTileAlign,
                      gap: 8,
                      background: m.open ? 'var(--surface)' : 'var(--surface-sunken)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        flex: 'none',
                        borderRadius: 'var(--radius-sm)',
                        display: 'grid',
                        placeItems: 'center',
                        background: m.open ? 'var(--accent-subtle)' : 'var(--surface)',
                        color: m.open ? 'var(--accent)' : 'var(--text-disabled)',
                      }}
                    >
                      <Icon name={m.open ? c.icon : 'lock'} size={20} />
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        minWidth: 0,
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          font: l.mTileFont,
                          color: m.open ? 'var(--text-primary)' : 'var(--text-disabled)',
                        }}
                      >
                        {c.name}
                      </span>
                      <span style={{ font: 'var(--text-caption)', color: 'var(--text-muted)' }}>
                        {t.employeeNotes[m.note]}
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className="uc-card"
            style={{
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              borderColor: 'var(--accent)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  flex: 'none',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--surface-sunken)',
                  border: '1px solid var(--border)',
                  display: 'grid',
                  placeItems: 'center',
                  font: 'var(--text-initials)',
                  color: 'var(--text-secondary)',
                }}
              >
                {EMPLOYEE_PARTNER.initials}
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                <span style={{ font: 'var(--text-tile-strong)' }}>{EMPLOYEE_PARTNER.name}</span>
                <span className="body-s text-muted">{t.mPartnerAddr}</span>
              </span>
              <span className="uc-badge uc-badge--success uc-badge--nodot">
                {EMPLOYEE_PARTNER.discount}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                alignItems: 'center',
                padding: 16,
                borderRadius: 'var(--radius-md)',
                background: 'var(--surface-sunken)',
              }}
            >
              {qr && (
                <img
                  src={qr}
                  alt="QR"
                  style={{
                    width: l.qrSize,
                    height: l.qrSize,
                    imageRendering: 'pixelated',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--on-brand)',
                  }}
                />
              )}
              <span
                className="numeric"
                style={{ font: 'var(--text-code)', letterSpacing: '.04em' }}
              >
                {EMPLOYEE_PARTNER.code}
              </span>
              <span
                className="body-s text-muted"
                style={{ textAlign: 'center', textWrap: 'pretty' }}
              >
                {t.mQrHint}
              </span>
            </div>
            <button className="uc-btn uc-btn--block uc-btn--lg">{t.mPay}</button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            borderTop: '1px solid var(--border)',
            background: 'var(--surface)',
          }}
        >
          {EMPLOYEE_TABS.map((icon, i) => (
            <span
              key={icon}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '10px 0 14px',
                color: i === 0 ? 'var(--accent)' : 'var(--text-muted)',
              }}
            >
              <Icon name={icon} size={24} />
              <span style={{ font: 'var(--text-caption)' }}>{t.employeeTabs[i]}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
