import { useI18n } from '../../i18n'
import { PARTNERS } from '../../mock/partners'
import { category } from '../../mock/derive'
import { Button, Icon } from '../../components/ds'

const BADGE = { ok: 'uc-badge--success', test: 'uc-badge--warning', draft: 'uc-badge--neutral' }

/** Partners: cards with the discount and how it is split. */
export default function Partners() {
  const { t } = useI18n()

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 680 }}>
          <h2 className="h1" style={{ margin: 0 }}>
            {t.partnersTitle}
          </h2>
          <p className="body-l text-secondary" style={{ margin: 0 }}>
            {t.partnersSub}
          </p>
        </div>
        <span style={{ flex: 'none', whiteSpace: 'nowrap' }}>
          <Button variant="secondary">{t.addPartner}</Button>
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {PARTNERS.map((p) => {
          const c = category(p.category, t)
          return (
            <div
              key={p.name}
              className="uc-card"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--surface-sunken)',
                    border: '1px solid var(--border)',
                    display: 'grid',
                    placeItems: 'center',
                    font: 'var(--text-initials)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {p.initials}
                </span>
                <span className={`uc-badge ${BADGE[p.status]}`}>{t.partnerStatus[p.status]}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ font: 'var(--text-h3)' }}>{p.name}</span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: 'var(--text-muted)',
                    font: 'var(--text-body-s)',
                  }}
                >
                  <Icon name={c.icon} size={16} />
                  {c.name}
                </span>
              </div>
              <div style={{ height: 1, background: 'var(--border)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="body-s text-muted">{t.discount}</span>
                  <span
                    className="numeric"
                    style={{ font: 'var(--text-amount-m)', color: 'var(--accent)' }}
                  >
                    {p.discount}%
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="body-s text-muted">{t.splitEmp}</span>
                  <span className="numeric body-s">{p.splitEmp}%</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="body-s text-muted">{t.splitPlat}</span>
                  <span className="numeric body-s">{p.splitPlat}%</span>
                </div>
              </div>
              <span className="body-s text-muted">{t.partnerPlaces[p.placeIndex]}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
