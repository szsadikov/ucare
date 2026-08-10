import { useState } from 'react'
import { useI18n } from '../../i18n'
import { PEOPLE } from '../../mock/people'
import { category } from '../../mock/derive'
import { Icon, Input, Select } from '../../components/ds'

const BADGE = { ok: 'uc-badge--success', inv: 'uc-badge--warning' }

/**
 * Employees: filters and the table.
 * The filters are presentational — they hold their value but do not narrow the
 * table, since the data is a fixed mock.
 */
export default function People() {
  const { t } = useI18n()
  const [filters, setFilters] = useState({ search: '', dept: 0, grade: 0, status: 'all' })

  const deptOptions = t.depts.map((label, value) => ({ value, label }))
  const gradeOptions = t.grades.map((label, value) => ({ value, label }))
  const statusOptions = [
    { value: 'all', label: t.statusOptions.all },
    { value: 'ok', label: t.statusOptions.ok },
    { value: 'inv', label: t.statusOptions.inv },
  ]

  return (
    <>
      <div
        className="uc-card"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
          gap: 16,
          alignItems: 'end',
        }}
      >
        <Input
          label={t.colEmployee}
          value={filters.search}
          onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
          placeholder={t.searchPlaceholder}
        />
        <Select
          label={t.colDept}
          options={deptOptions}
          value={filters.dept}
          onChange={(e) => setFilters((f) => ({ ...f, dept: Number(e.target.value) }))}
        />
        <Select
          label={t.colGrade}
          options={gradeOptions}
          value={filters.grade}
          onChange={(e) => setFilters((f) => ({ ...f, grade: Number(e.target.value) }))}
        />
        <Select
          label={t.colStatus}
          options={statusOptions}
          value={filters.status}
          onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
        />
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
            {t.peopleTitle}
          </h3>
          <span className="body-s text-muted">{t.peopleSub}</span>
        </div>
        <table className="uc-table" style={{ border: 0, borderRadius: 0 }}>
          <thead>
            <tr>
              <th>{t.colEmployee}</th>
              <th>{t.colDept}</th>
              <th>{t.colGrade}</th>
              <th className="uc-num">{t.colTenure}</th>
              <th>{t.colAccess}</th>
              <th>{t.colStatus}</th>
            </tr>
          </thead>
          <tbody>
            {PEOPLE.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{t.depts[p.dept]}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{t.grades[p.grade]}</td>
                <td className="uc-num">{t.peopleTenures[p.tenureIndex]}</td>
                <td>
                  <span style={{ display: 'flex', gap: 6, color: 'var(--text-secondary)' }}>
                    {p.cats.map((k) => (
                      <Icon key={k} name={category(k, t).icon} size={16} />
                    ))}
                  </span>
                </td>
                <td>
                  <span className={`uc-badge ${BADGE[p.status]}`}>{t.peopleStatus[p.status]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '14px 20px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <span className="body-s text-muted">{t.pagerInfo}</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="uc-btn uc-btn--secondary uc-btn--sm" disabled>
              {t.prev}
            </button>
            <button className="uc-btn uc-btn--secondary uc-btn--sm">{t.next}</button>
          </div>
        </div>
      </div>
    </>
  )
}
