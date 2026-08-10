import { useI18n } from '../../i18n'
import { useCabinet } from '../../layout/cabinetContext'
import {
  ANALYTICS_TILES,
  DYNAMICS,
  DYNAMICS_SCALE,
  TURNOVER,
  TURNOVER_BASELINE,
} from '../../mock/analytics'
import { MONTHLY_BUDGET } from '../../mock/org'
import { budgetSummary, formatDecimal, usageRows } from '../../mock/derive'
import { Icon } from '../../components/ds'

const MUTED_ICON = { color: 'var(--text-muted)' } as const

/** Analytics: utilisation, activation trend and turnover by department. */
export default function Analytics() {
  const { t } = useI18n()
  const { period } = useCabinet()
  const b = budgetSummary(MONTHLY_BUDGET, period, t)
  const usage = usageRows(t, b.mult)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 760 }}>
        <h2 className="h1" style={{ margin: 0 }}>
          {t.analyticsTitle}
        </h2>
        <p className="body-l text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
          {t.analyticsSub}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {ANALYTICS_TILES.map((tile, i) => (
          <div
            key={t.analytics[i].label}
            className="uc-card"
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <span className="overline">{t.analytics[i].label}</span>
            <b style={{ font: 'var(--text-amount-l)', letterSpacing: 'var(--tracking-display)' }}>
              {typeof tile.value === 'number'
                ? `${formatDecimal(tile.value, t)}%`
                : (tile.value ?? b.utilPct)}
            </b>
            <span
              className="body-s"
              style={{
                color: tile.deltaColor === 'success' ? 'var(--success)' : 'var(--text-muted)',
              }}
            >
              {t.analytics[i].delta}
            </span>
            <span className="body-s text-muted" style={{ textWrap: 'pretty' }}>
              {t.analytics[i].sub}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}
      >
        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h3 className="h2" style={{ margin: 0 }}>
            {t.utilTitle}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {usage.map((u) => (
              <div
                key={u.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr 56px',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span
                  style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--text-body)' }}
                >
                  <Icon name={u.icon} size={16} style={MUTED_ICON} />
                  {u.name}
                </span>
                <span
                  style={{
                    display: 'block',
                    height: 8,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--surface-sunken)',
                  }}
                >
                  <i
                    style={{
                      display: 'block',
                      height: '100%',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--accent)',
                      width: u.util,
                    }}
                  />
                </span>
                <span
                  className="numeric body-s"
                  style={{ textAlign: 'right', color: 'var(--text-secondary)' }}
                >
                  {u.util}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h3 className="h2" style={{ margin: 0 }}>
            {t.dynamicsTitle}
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 16,
              height: 220,
              paddingTop: 8,
            }}
          >
            {DYNAMICS.map((value, i) => (
              <div
                key={t.months[i]}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  height: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <span className="numeric body-s" style={{ color: 'var(--text-secondary)' }}>
                  {value}
                </span>
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                    background: 'var(--accent)',
                    height: `${Math.round((value / DYNAMICS_SCALE) * 100)}%`,
                  }}
                />
                <span className="body-s text-muted">{t.months[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <h3 className="h2" style={{ margin: 0 }}>
            {t.turnoverTitle}
          </h3>
          <span className="body-s text-muted">{t.turnoverSub}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {TURNOVER.map((d) => (
            <div
              key={d.dept}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr 72px',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <span className="body">{t.depts[d.dept]}</span>
              <span
                style={{
                  display: 'block',
                  height: 8,
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--surface-sunken)',
                }}
              >
                <i
                  style={{
                    display: 'block',
                    height: '100%',
                    borderRadius: 'var(--radius-full)',
                    background:
                      d.value > TURNOVER_BASELINE ? 'var(--warning)' : 'var(--accent)',
                    width: d.width,
                  }}
                />
              </span>
              <span
                className="numeric body-s"
                style={{ textAlign: 'right', color: 'var(--text-secondary)' }}
              >
                {formatDecimal(d.value, t)} %
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="uc-card"
        style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'var(--surface-sunken)' }}
      >
        <span
          style={{
            color: 'var(--text-secondary)',
            display: 'grid',
            placeItems: 'center',
            paddingTop: 2,
          }}
        >
          <Icon name="info" size={20} />
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--text-h3)' }}>{t.horizonTitle}</span>
          <span className="body text-secondary" style={{ textWrap: 'pretty' }}>
            {t.horizonBody}
          </span>
        </div>
      </div>
    </>
  )
}
