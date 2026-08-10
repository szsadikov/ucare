import { useState } from 'react'
import { useI18n } from '../../i18n'
import { useShell } from '../../layout/shellContext'
import { useCabinet } from '../../layout/cabinetContext'
import { CATEGORY_KEYS, type CategoryKey } from '../../mock/categories'
import { ACCESS_MATRIX, LADDER, NEW_RULE_DEFAULTS } from '../../mock/rules'
import { category, ladderRow, ruleView } from '../../mock/derive'
import { Button, Icon, IconButton, Select } from '../../components/ds'
import { useToast } from '../../components/layout/toastContext'

const MUTED_ICON = { color: 'var(--text-muted)' } as const
const tickStyle = {
  position: 'absolute',
  fontStyle: 'normal',
  font: 'var(--text-caption)',
  color: 'var(--text-muted)',
} as const

/** Access rules: the rule builder, the tenure ladder and the access matrix. */
export default function Rules() {
  const { t } = useI18n()
  const { l } = useShell()
  const { rules, addRule, removeRule } = useCabinet()
  const flash = useToast()

  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    dept: NEW_RULE_DEFAULTS.dept,
    grade: NEW_RULE_DEFAULTS.grade,
    tenure: NEW_RULE_DEFAULTS.tenure,
    cats: NEW_RULE_DEFAULTS.cats,
  })

  const deptOptions = t.depts.map((label, value) => ({ value, label }))
  const gradeOptions = t.grades.map((label, value) => ({ value, label }))
  const tenureOptions = t.tenures.map((label, value) => ({ value, label }))

  const toggleCat = (k: CategoryKey) =>
    setForm((f) => ({
      ...f,
      cats: f.cats.includes(k) ? f.cats.filter((x) => x !== k) : [...f.cats, k],
    }))

  const save = () => {
    if (!form.cats.length) return
    addRule({ dept: form.dept, grade: form.grade, tenure: form.tenure, cats: [...form.cats] })
    setShowForm(false)
    flash(t.toastRuleSaved)
  }

  const ladder = LADDER.map((x) => ladderRow(x.key, x.months, t))

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 720 }}>
          <h2 className="h1" style={{ margin: 0 }}>
            {t.rulesTitle}
          </h2>
          <p className="body-l text-secondary" style={{ margin: 0, textWrap: 'pretty' }}>
            {t.rulesSub}
          </p>
        </div>
        <span style={{ flex: 'none', whiteSpace: 'nowrap' }}>
          <Button onClick={() => setShowForm((v) => !v)}>{t.addRule}</Button>
        </span>
      </div>

      {/* Tenure ladder */}
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
            {t.ladderTitle}
          </h3>
          <span
            className="body-s text-muted"
            style={{ maxWidth: 520, textAlign: 'right', textWrap: 'pretty' }}
          >
            {t.ladderNote}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {ladder.map((row) => (
            <div
              key={row.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <span
                style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--text-body)' }}
              >
                <Icon name={row.icon} size={16} style={MUTED_ICON} />
                {row.name}
              </span>
              <span
                style={{
                  position: 'relative',
                  display: 'block',
                  height: 28,
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--surface-sunken)',
                }}
              >
                <i
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: row.pct,
                    background: 'var(--accent-subtle)',
                    border: '1px solid var(--accent)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                />
                <i
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: row.labelLeft,
                    right: row.labelRight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: row.labelJustify,
                    padding: '0 10px',
                    font: 'var(--text-chip-m)',
                    color: 'var(--accent)',
                    fontStyle: 'normal',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.from}
                </i>
              </span>
            </div>
          ))}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: 16,
              marginTop: 4,
            }}
          >
            <span />
            <span style={{ position: 'relative', display: 'block', height: 20 }}>
              <i style={{ ...tickStyle, left: 0 }}>0</i>
              <i style={{ ...tickStyle, left: '12.5%' }}>{t.tick3}</i>
              <i style={{ ...tickStyle, left: '25%' }}>{t.tick6}</i>
              <i style={{ ...tickStyle, left: '50%' }}>{t.tick12}</i>
              <i style={{ ...tickStyle, right: 0 }}>{t.tick24}</i>
            </span>
          </div>
        </div>
      </div>

      {/* New rule form */}
      {showForm && (
        <div
          className="uc-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            borderColor: 'var(--accent)',
          }}
        >
          <h3 className="h2" style={{ margin: 0 }}>
            {t.newRule}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: l.c3, gap: 16 }}>
            <Select
              label={t.fieldDept}
              options={deptOptions}
              value={form.dept}
              onChange={(e) => setForm((f) => ({ ...f, dept: Number(e.target.value) }))}
            />
            <Select
              label={t.fieldGrade}
              options={gradeOptions}
              value={form.grade}
              onChange={(e) => setForm((f) => ({ ...f, grade: Number(e.target.value) }))}
            />
            <Select
              label={t.fieldTenure}
              options={tenureOptions}
              value={form.tenure}
              onChange={(e) => setForm((f) => ({ ...f, tenure: Number(e.target.value) }))}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span
              className="body-s"
              style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
            >
              {t.fieldCats}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CATEGORY_KEYS.map((k) => {
                const c = category(k, t)
                const on = form.cats.includes(k)
                return (
                  <button
                    key={k}
                    onClick={() => toggleCat(k)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      height: 36,
                      padding: '0 14px',
                      borderRadius: 'var(--radius-full)',
                      cursor: 'pointer',
                      font: 'var(--text-body)',
                      background: on ? 'var(--accent-subtle)' : 'var(--surface)',
                      color: on ? 'var(--accent)' : 'var(--text-secondary)',
                      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
                    }}
                  >
                    <Icon name={c.icon} size={16} />
                    {c.name}
                  </button>
                )
              })}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <button onClick={() => setShowForm(false)} className="uc-btn uc-btn--ghost">
              {t.cancel}
            </button>
            <Button onClick={save}>{t.saveRule}</Button>
          </div>
        </div>
      )}

      {/* Rule cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {rules.map((rule, i) => {
          const r = ruleView(rule, i, t)
          return (
            <div
              key={r.id}
              className="uc-card"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="overline">{r.num}</span>
                  <span className="uc-badge uc-badge--success">{r.statusLabel}</span>
                  <span className="body-s text-muted">{r.people}</span>
                </div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <IconButton label="edit" size="sm">
                    <Icon name="pencil" size={16} />
                  </IconButton>
                  <IconButton label="delete" size="sm" onClick={() => removeRule(r.id)}>
                    <Icon name="trash-2" size={16} />
                  </IconButton>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 32px 1.3fr',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                {[
                  { label: t.fieldDept, value: r.dept, accent: false },
                  { label: t.fieldGrade, value: r.grade, accent: false },
                  { label: t.fieldTenure, value: r.tenure, accent: true },
                ].map((cell) => (
                  <div
                    key={cell.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      padding: '12px 14px',
                      border: `1px solid ${cell.accent ? 'var(--accent)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius-sm)',
                      background: cell.accent ? 'var(--accent-subtle)' : 'var(--surface-sunken)',
                    }}
                  >
                    <span
                      className="overline"
                      style={cell.accent ? { color: 'var(--accent)' } : undefined}
                    >
                      {cell.label}
                    </span>
                    <span
                      style={{
                        font: 'var(--text-strong)',
                        color: cell.accent ? 'var(--accent)' : undefined,
                      }}
                    >
                      {cell.value}
                    </span>
                  </div>
                ))}
                <span
                  style={{ display: 'grid', placeItems: 'center', color: 'var(--text-muted)' }}
                >
                  <Icon name="arrow-right" size={20} />
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {r.cats.map((c) => (
                    <span
                      key={c.key}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        height: 32,
                        padding: '0 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                        font: 'var(--text-pill)',
                      }}
                    >
                      <Icon name={c.icon} size={16} />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div
                  style={{
                    position: 'relative',
                    height: 10,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--surface-sunken)',
                  }}
                >
                  <i
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: r.pct,
                      background: 'var(--border-strong)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  />
                  <i
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      left: r.pct,
                      background: 'var(--accent)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  />
                  <i
                    style={{
                      position: 'absolute',
                      top: -5,
                      height: 20,
                      width: 2,
                      background: 'var(--accent)',
                      left: r.pct,
                    }}
                  />
                </div>
                <div style={{ position: 'relative', height: 18 }}>
                  {r.showLeftTick && <i style={{ ...tickStyle, left: 0 }}>{t.hireDay}</i>}
                  <i
                    style={{
                      position: 'absolute',
                      fontStyle: 'normal',
                      font: 'var(--text-chip-m)',
                      color: r.openColor,
                      whiteSpace: 'nowrap',
                      left: r.openLeft,
                      right: r.openRight,
                      transform: r.openShift,
                    }}
                  >
                    {r.opensAt}
                  </i>
                  {r.showRightTick && (
                    <i style={{ ...tickStyle, right: 0, whiteSpace: 'nowrap' }}>{t.tick24}+</i>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Access matrix */}
      <div className="uc-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 className="h2" style={{ margin: 0 }}>
          {t.matrixTitle}
        </h3>
        <table className="uc-table">
          <thead>
            <tr>
              <th style={{ width: 280 }}>{t.colCategory}</th>
              {t.levels.map((lv) => (
                <th key={lv.label} style={{ textAlign: 'center' }}>
                  {lv.label} · {lv.range}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CATEGORY_KEYS.map((k) => {
              const c = category(k, t)
              return (
                <tr key={k}>
                  <td>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Icon name={c.icon} size={18} />
                      {c.name}
                    </span>
                  </td>
                  {ACCESS_MATRIX[k].map((v, ci) => (
                    <td
                      key={ci}
                      style={{
                        textAlign: 'center',
                        font: 'var(--text-strong)',
                        color: v ? 'var(--accent)' : 'var(--text-disabled)',
                      }}
                    >
                      {v ? '✓' : '—'}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
