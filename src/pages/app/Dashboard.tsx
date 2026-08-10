import { useNavigate } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { useCabinet } from '../../layout/cabinetContext'
import { FEED, METRICS } from '../../mock/dashboard'
import { MONTHLY_BUDGET } from '../../mock/org'
import { budgetSummary, category, fmt, ruleView, usageRows } from '../../mock/derive'
import { Icon } from '../../components/ds'

const MUTED_ICON = { color: 'var(--text-muted)' } as const

/** Dashboard: metrics, spend by category, transaction feed and limit status. */
export default function Dashboard() {
  const { t } = useI18n()
  const { l } = useShell()
  const { rules, period } = useCabinet()
  const navigate = useNavigate()

  const b = budgetSummary(MONTHLY_BUDGET, period, t)
  const usage = usageRows(t, b.mult)
  const recent = rules.slice(0, 3).map((r, i) => ruleView(r, i, t))

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
        {METRICS.map((m, i) => (
          <div
            key={m.icon}
            className="uc-card"
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span className="overline">{t.metrics[i].label}</span>
              <Icon name={m.icon} size={20} style={MUTED_ICON} />
            </div>
            <b
              style={{ font: 'var(--text-amount-l)', letterSpacing: 'var(--tracking-display)' }}
            >
              {m.value}
            </b>
            <span className="body-s text-muted">{t.metrics[i].sub}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: 24,
          alignItems: 'stretch',
        }}
      >
        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}
          >
            <h3 className="h2" style={{ margin: 0 }}>
              {t.usageTitle}
            </h3>
            <span className="body-s text-muted">{t.periodAugust}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {usage.map((u) => (
              <div
                key={u.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr 120px',
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
                      width: u.width,
                    }}
                  />
                </span>
                <span
                  className="numeric body-s"
                  style={{ textAlign: 'right', color: 'var(--text-secondary)' }}
                >
                  {u.amount}
                </span>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: 'var(--border)' }} />
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <span className="body-s text-muted">{t.usageTotal}</span>
            <span className="numeric" style={{ font: 'var(--text-amount-m)' }}>
              {fmt(b.spent)} UZS
            </span>
          </div>
        </div>

        <div
          className="uc-card uc-card--flush"
          style={{ display: 'flex', flexDirection: 'column', overflowX: 'auto' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              padding: 20,
            }}
          >
            <h3 className="h2" style={{ margin: 0 }}>
              {t.feedTitle}
            </h3>
            <span className="body-s text-muted">{t.feedSub}</span>
          </div>
          <table className="uc-table" style={{ border: 0, borderRadius: 0 }}>
            <thead>
              <tr>
                <th>{t.colEmployee}</th>
                <th>{t.colPartner}</th>
                <th className="uc-num">{t.colAmount}</th>
                <th className="uc-num">{t.colTime}</th>
              </tr>
            </thead>
            <tbody>
              {FEED.map((f) => (
                <tr key={f.who}>
                  <td>{f.who}</td>
                  <td>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Icon name={category(f.category, t).icon} size={16} />
                      {f.partner}
                    </span>
                  </td>
                  <td className="uc-num">{fmt(f.amount)}</td>
                  <td className="uc-num" style={{ color: 'var(--text-muted)' }}>
                    {f.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}
      >
        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <h3 className="h2" style={{ margin: 0 }}>
              {t.limitStateTitle}
            </h3>
            <span className="body-s text-muted">{t.periodAugust}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 16 }}>
            {[
              { label: t.budgetLabel, value: fmt(b.total) },
              { label: t.spent, value: fmt(b.spent) },
              { label: t.colLeft, value: fmt(b.left) },
            ].map((cell) => (
              <div
                key={cell.label}
                style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
              >
                <span className="body-s text-muted">{cell.label}</span>
                <span className="numeric" style={{ font: 'var(--text-amount-m)' }}>
                  {cell.value}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              height: 10,
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              background: 'var(--surface-sunken)',
            }}
          >
            <i style={{ background: 'var(--accent)', width: b.spentPct }} />
            <i style={{ background: 'var(--accent-subtle)', width: b.freePct }} />
          </div>
          <div style={{ marginTop: 'auto' }}>
            <button
              onClick={() => navigate('/app/limits')}
              className="uc-btn uc-btn--secondary"
            >
              {t.openLimits}
            </button>
          </div>
        </div>

        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <h3 className="h2" style={{ margin: 0 }}>
              {t.rulesCardTitle}
            </h3>
            <span className="body-s text-muted">
              <span className="numeric">{rules.length}</span> {t.rulesCardSub}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {recent.map((r) => (
              <div
                key={r.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '10px 14px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--surface-sunken)',
                }}
              >
                <span className="body-s" style={{ color: 'var(--text-primary)' }}>
                  {`${r.dept} · ${r.grade} · ${r.tenure}`}
                </span>
                <span style={{ display: 'flex', gap: 6, color: 'var(--accent)' }}>
                  {r.cats.map((c) => (
                    <Icon key={c.key} name={c.icon} size={16} />
                  ))}
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'auto' }}>
            <button onClick={() => navigate('/app/rules')} className="uc-btn uc-btn--secondary">
              {t.openRules}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
