import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { CATEGORY_KEYS } from '../../mock/categories'
import { category } from '../../mock/derive'
import { PROBLEM_ICONS, STEP_NUMBERS } from '../../mock/landing'
import { Icon } from '../ds'

/** "Why the benefits package does not work". */
export function Problems() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section style={{ padding: l.padSec, borderBottom: '1px solid var(--border)' }}>
      <h2 className="h1" style={{ margin: '0 0 8px' }}>
        {t.problemTitle}
      </h2>
      <p className="body-l text-secondary" style={{ margin: '0 0 32px', maxWidth: 680 }}>
        {t.problemSub}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 24 }}>
        {t.problems.map((p, i) => (
          <div
            key={p.title}
            className="uc-card"
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface-sunken)',
                color: 'var(--text-secondary)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Icon name={PROBLEM_ICONS[i]} size={20} />
            </span>
            <h3 className="h3" style={{ margin: 0 }}>
              {p.title}
            </h3>
            <p className="body text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/** "Voices from the market". */
export function Voices() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section
      style={{
        padding: l.padSec,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-sunken)',
      }}
    >
      <h2 className="h1" style={{ margin: '0 0 8px' }}>
        {t.voicesTitle}
      </h2>
      <p className="body-l text-secondary" style={{ margin: '0 0 24px', maxWidth: 680 }}>
        {t.voicesSub}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 24 }}>
        {t.voices.map((v) => (
          <div
            key={v.role}
            className="uc-card"
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <span style={{ font: 'var(--text-quote)', color: 'var(--border-strong)', height: 28 }}>
              “
            </span>
            <p className="body-l" style={{ margin: 0, textWrap: 'pretty' }}>
              {v.quote}
            </p>
            <span className="body-s text-muted" style={{ marginTop: 'auto' }}>
              {v.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/** "This is not a discount app". */
export function Difference() {
  const { t } = useI18n()
  const { l } = useShell()

  const item = (text: string, tone: 'a' | 'b') => (
    <span
      key={text}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        color: tone === 'a' ? 'var(--on-brand-70)' : 'var(--on-brand)',
        font: 'var(--text-body-l)',
      }}
    >
      <span
        style={{
          color: tone === 'a' ? 'var(--on-brand-45)' : 'var(--blue-400)',
          paddingTop: 4,
        }}
      >
        <Icon name={tone === 'a' ? 'x' : 'check'} size={20} />
      </span>
      {text}
    </span>
  )

  return (
    <section style={{ padding: l.padSec, background: 'var(--blue-900)' }}>
      <h2
        style={{
          font: 'var(--text-display-m)',
          letterSpacing: 'var(--tracking-display)',
          color: 'var(--on-brand)',
          margin: '0 0 8px',
        }}
      >
        {t.diffTitle}
      </h2>
      <p
        className="body-l"
        style={{
          margin: '0 0 28px',
          maxWidth: 760,
          color: 'var(--on-brand-78)',
          textWrap: 'pretty',
        }}
      >
        {t.diffSub}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: l.c2e, gap: 24 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: 24,
            border: '1px solid var(--on-brand-border-18)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <span
            style={{
              font: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              textTransform: 'uppercase',
              color: 'var(--on-brand-55)',
            }}
          >
            {t.diffColA}
          </span>
          {t.diffA.map((d) => item(d, 'a'))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: 24,
            border: '1px solid var(--blue-400)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--accent-tint-12)',
          }}
        >
          <span
            style={{
              font: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              textTransform: 'uppercase',
              color: 'var(--blue-400)',
            }}
          >
            uCare
          </span>
          {t.diffB.map((d) => item(d, 'b'))}
        </div>
      </div>
    </section>
  )
}

/** "Works in three steps". */
export function HowItWorks() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section
      id="how"
      style={{
        padding: l.padSec,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <h2 className="h1" style={{ margin: '0 0 24px' }}>
        {t.howTitle}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 24 }}>
        {t.steps.map((s, i) => (
          <div
            key={s.title}
            className="uc-card"
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <span style={{ font: 'var(--text-amount-m)', color: 'var(--accent)' }}>
              {STEP_NUMBERS[i]}
            </span>
            <h3 className="h3" style={{ margin: 0, textWrap: 'pretty' }}>
              {s.title}
            </h3>
            <p className="body text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/** "Partner categories". */
export function Categories() {
  const { t } = useI18n()
  const { l } = useShell()
  return (
    <section
      id="cats"
      style={{
        padding: l.padStrip2,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-sunken)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 32,
          marginBottom: 20,
        }}
      >
        <h2 className="h2" style={{ margin: 0 }}>
          {t.catsTitle}
        </h2>
        <span
          className="body-s text-muted"
          style={{ maxWidth: 560, textAlign: 'right', textWrap: 'pretty' }}
        >
          {t.catsSub}
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: l.catsCols, gap: 12 }}>
        {CATEGORY_KEYS.map((k) => {
          const c = category(k, t)
          return (
            <div
              key={k}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                padding: '16px 8px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--surface)',
                color: 'var(--accent)',
              }}
            >
              <Icon name={c.icon} size={24} />
              <span
                className="body-s"
                style={{ color: 'var(--text-primary)', textAlign: 'center' }}
              >
                {c.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
