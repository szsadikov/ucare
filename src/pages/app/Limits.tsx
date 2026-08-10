import { useState } from 'react'
import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { useCabinet } from '../../layout/cabinetContext'
import { GROUP_LIMIT_DEFAULTS, LIMIT_ROWS } from '../../mock/limits'
import { MONTHLY_BUDGET } from '../../mock/org'
import { budgetSummary, fmt, limitRow } from '../../mock/derive'
import { Button, Icon, Input, Select } from '../../components/ds'
import { useToast } from '../../components/layout/toastContext'

/** Limits: budget for the period, limit by group, per-employee table. */
export default function Limits() {
  const { t } = useI18n()
  const { l } = useShell()
  const { period, setPeriod } = useCabinet()
  const flash = useToast()

  const [group, setGroup] = useState(GROUP_LIMIT_DEFAULTS)
  const b = budgetSummary(MONTHLY_BUDGET, period, t)
  const rows = LIMIT_ROWS.map((r) => limitRow(r, t))

  const groupTargetOptions =
    group.by === 'dept'
      ? t.depts.slice(1).map((label, i) => ({ value: `d${i}`, label }))
      : t.grades.slice(1).map((label, i) => ({ value: `g${i}`, label }))

  const periodPill = (activeSelf: boolean) => ({
    height: 28,
    padding: '0 14px',
    border: 0,
    borderRadius: 'var(--radius-full)',
    cursor: 'pointer',
    font: 'var(--text-pill)',
    background: activeSelf ? 'var(--accent-subtle)' : 'transparent',
    color: activeSelf ? 'var(--accent)' : 'var(--text-secondary)',
  })

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 24,
          alignItems: 'start',
        }}
      >
        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 24,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span className="overline">{t.budgetLabel}</span>
              <b
                style={{ font: 'var(--text-amount-l)', letterSpacing: 'var(--tracking-display)' }}
              >
                {fmt(b.total)} UZS
              </b>
              <span className="body-s text-muted">{t.budgetSub}</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: 4,
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <button onClick={() => setPeriod('month')} style={periodPill(period === 'month')}>
                {t.month}
              </button>
              <button
                onClick={() => setPeriod('quarter')}
                style={periodPill(period === 'quarter')}
              >
                {t.quarter}
              </button>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              height: 12,
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              background: 'var(--surface-sunken)',
            }}
          >
            <i style={{ background: 'var(--accent)', width: b.spentPct }} />
            <i style={{ background: 'var(--accent-subtle)', width: b.freePct }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 16 }}>
            {[
              { label: t.distributed, value: fmt(b.distributed) },
              { label: t.spent, value: fmt(b.spent) },
              { label: t.reserve, value: fmt(b.reserve) },
            ].map((cell) => (
              <div key={cell.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
              gap: 12,
              alignItems: 'flex-start',
              padding: '14px 16px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--surface-sunken)',
            }}
          >
            <span
              style={{
                color: 'var(--text-secondary)',
                display: 'grid',
                placeItems: 'center',
                paddingTop: 2,
              }}
            >
              <Icon name="shield-check" size={20} />
            </span>
            <span className="body-s text-secondary" style={{ textWrap: 'pretty' }}>
              {t.limitNote}
            </span>
          </div>
        </div>

        <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 className="h2" style={{ margin: 0 }}>
            {t.groupTitle}
          </h3>
          <p className="body-s text-muted" style={{ margin: 0, textWrap: 'pretty' }}>
            {t.groupSub}
          </p>
          <Select
            label={t.groupBy}
            options={[
              { value: 'dept', label: t.groupBySelect.dept },
              { value: 'grade', label: t.groupBySelect.grade },
            ]}
            value={group.by}
            onChange={(e) => {
              const by = e.target.value as 'dept' | 'grade'
              setGroup((g) => ({ ...g, by, target: by === 'dept' ? 'd0' : 'g0' }))
            }}
          />
          <Select
            label={t.groupTarget}
            options={groupTargetOptions}
            value={group.target}
            onChange={(e) => setGroup((g) => ({ ...g, target: e.target.value }))}
          />
          <Input
            label={t.groupAmount}
            value={group.amount}
            onChange={(e) => setGroup((g) => ({ ...g, amount: e.target.value }))}
            hint={t.groupHint}
          />
          <Button onClick={() => flash(t.toastLimitsSaved)} block>
            {t.applyGroup}
          </Button>
        </div>
      </div>

      <div className="uc-card uc-card--flush" style={{ overflowX: 'auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <h3 className="h2" style={{ margin: 0 }}>
            {t.limitsTableTitle}
          </h3>
          <span className="body-s text-muted">{t.limitsTableSub}</span>
        </div>
        <table className="uc-table" style={{ border: 0, borderRadius: 0 }}>
          <thead>
            <tr>
              <th>{t.colEmployee}</th>
              <th>{t.colDept}</th>
              <th className="uc-num">{t.colLimit}</th>
              <th className="uc-num">{t.colSpent}</th>
              <th className="uc-num">{t.colLeft}</th>
              <th style={{ width: 200 }}>{t.colProgress}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{r.dept}</td>
                <td className="uc-num">{r.limit}</td>
                <td className="uc-num">{r.spent}</td>
                <td className="uc-num" style={{ color: r.leftColor }}>
                  {r.left}
                </td>
                <td>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span
                      style={{
                        flex: 1,
                        display: 'block',
                        height: 6,
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--surface-sunken)',
                      }}
                    >
                      <i
                        style={{
                          display: 'block',
                          height: '100%',
                          borderRadius: 'var(--radius-full)',
                          width: r.pct,
                          background: r.barColor,
                        }}
                      />
                    </span>
                    <span className="numeric body-s text-muted">{r.pct}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
