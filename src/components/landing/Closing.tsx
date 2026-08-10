import { useState } from 'react'
import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { OBJECTION_ICONS, PARTNER_POINT_ICONS, CONTACTS } from '../../mock/landing'
import { Button, Icon, Input } from '../ds'
import { useToast } from '../layout/toastContext'
import { scrollToPilotForm } from './scrollToPilotForm'

/** "Why not just pay a bonus?". */
export function Objections() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section
      style={{
        padding: l.padSec,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <h2 className="h1" style={{ margin: '0 0 8px' }}>
        {t.objTitle}
      </h2>
      <p
        className="body-l text-secondary"
        style={{ margin: '0 0 24px', maxWidth: 720, textWrap: 'pretty' }}
      >
        {t.objSub}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 24 }}>
        {t.objections.map((o, i) => (
          <div
            key={o.title}
            className="uc-card uc-card--sunken"
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--accent)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Icon name={OBJECTION_ICONS[i]} size={20} />
            </span>
            <h3 className="h3" style={{ margin: 0, textWrap: 'pretty' }}>
              {o.title}
            </h3>
            <p className="body text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
              {o.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/** The partners block. */
export function PartnersBlock() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section
      id="partners"
      style={{
        padding: l.padSec,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-sunken)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: l.c2,
          gap: l.gap2,
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="overline">{t.partnersOverline}</span>
          <h2 className="h1" style={{ margin: 0, textWrap: 'pretty' }}>
            {t.partnersLandTitle}
          </h2>
          <p className="body-l text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
            {t.partnersLandSub}
          </p>
          <div style={{ marginTop: 8 }}>
            <Button onClick={scrollToPilotForm}>{t.becomePartner}</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {t.partnerPoints.map((p, i) => (
            <div
              key={p.title}
              className="uc-card"
              style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  flex: 'none',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-subtle)',
                  color: 'var(--accent)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Icon name={PARTNER_POINT_ICONS[i]} size={20} />
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ font: 'var(--text-h3)' }}>{p.title}</span>
                <span className="body text-secondary" style={{ textWrap: 'pretty' }}>
                  {p.body}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Pilot offer banner. */
export function PilotCta() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section id="pilot" style={{ padding: l.padSec, background: 'var(--blue-800)' }}>
      <div
        style={{
          display: 'flex',
          alignItems: l.alignC,
          justifyContent: 'space-between',
          gap: 24,
          flexDirection: l.colDir,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640 }}>
          <span
            style={{
              font: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              textTransform: 'uppercase',
              color: 'var(--on-brand-60)',
            }}
          >
            {t.offerOverline}
          </span>
          <h2
            style={{
              font: 'var(--text-display-m)',
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--on-brand)',
              margin: 0,
            }}
          >
            {t.offerTitle}
          </h2>
          <p
            className="body-l"
            style={{ margin: 0, color: 'var(--on-brand-82)', textWrap: 'pretty' }}
          >
            {t.offerSub}
          </p>
        </div>
        <button
          onClick={scrollToPilotForm}
          style={{
            height: 48,
            padding: '0 28px',
            flex: 'none',
            border: 0,
            borderRadius: 'var(--radius-md)',
            background: 'var(--on-brand)',
            color: 'var(--blue-800)',
            font: 'var(--text-btn-lg)',
            cursor: 'pointer',
          }}
        >
          {t.applyCta}
        </button>
      </div>
    </section>
  )
}

/** Pilot request form. */
export function PilotForm() {
  const { t } = useI18n()
  const { l } = useShell()
  const flash = useToast()
  const [form, setForm] = useState({ name: '', company: '', size: '', contact: '' })

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = () => {
    setForm({ name: '', company: '', size: '', contact: '' })
    flash(t.toastApplication)
  }

  return (
    <section
      id="pilot-form"
      style={{
        padding: l.padSec,
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{ display: 'grid', gridTemplateColumns: l.c2, gap: l.gap2, alignItems: 'start' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 className="h1" style={{ margin: 0 }}>
            {t.formTitle}
          </h2>
          <p className="body-l text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
            {t.formSub}
          </p>
        </div>
        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: l.c2e, gap: 16 }}>
            <Input label={t.fName} value={form.name} onChange={set('name')} hint={t.fNameHint} />
            <Input
              label={t.fCompany}
              value={form.company}
              onChange={set('company')}
              hint={t.fNameHint}
            />
            <Input label={t.fSize} value={form.size} onChange={set('size')} />
            <Input
              label={t.fContact}
              value={form.contact}
              onChange={set('contact')}
              hint={t.fNameHint}
            />
          </div>
          <Button onClick={submit} size="lg" block>
            {t.applyCta}
          </Button>
        </div>
      </div>
    </section>
  )
}

/** Footer. */
export function SiteFooter() {
  const { t } = useI18n()
  const { l } = useShell()
  const linkStyle = {
    font: 'var(--text-body)',
    color: 'var(--on-brand-82)',
    textDecoration: 'none',
  } as const

  return (
    <footer
      style={{
        padding: l.padStrip2,
        background: 'var(--blue-900)',
        display: 'grid',
        gridTemplateColumns: l.c3f,
        gap: l.gap2,
        alignItems: 'start',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <img
          src="/logo-reversed-clear.svg"
          alt="uCare"
          style={{ height: 'var(--logo-footer-h)', width: 'auto', alignSelf: 'flex-start' }}
        />
        <span className="body-s" style={{ color: 'var(--on-brand-82)', textWrap: 'pretty' }}>
          {t.footer}
        </span>
        <span className="body-s" style={{ color: 'var(--on-brand-50)', textWrap: 'pretty' }}>
          {t.footerNote}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span
          style={{
            font: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            textTransform: 'uppercase',
            color: 'var(--on-brand-50)',
          }}
        >
          {t.footerProduct}
        </span>
        <a href="#how" style={linkStyle}>
          {t.navHow}
        </a>
        <a href="#cats" style={linkStyle}>
          {t.navCats}
        </a>
        <a href="#partners" style={linkStyle}>
          {t.partnersOverline}
        </a>
        <a href="#pilot" style={linkStyle}>
          {t.navPilot}
        </a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span
          style={{
            font: 'var(--text-overline)',
            letterSpacing: 'var(--tracking-overline)',
            textTransform: 'uppercase',
            color: 'var(--on-brand-50)',
          }}
        >
          {t.footerContacts}
        </span>
        <span className="body" style={{ color: 'var(--on-brand-82)' }}>
          {CONTACTS.email}
        </span>
        <span className="body numeric" style={{ color: 'var(--on-brand-82)' }}>
          {CONTACTS.phone}
        </span>
        <span className="body" style={{ color: 'var(--on-brand-82)' }}>
          {t.footerCity}
        </span>
      </div>
    </footer>
  )
}
