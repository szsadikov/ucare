import type { Dict } from '../i18n'
import { CATEGORY_ICONS, type CategoryKey } from './categories'
import { USAGE, USAGE_MAX } from './dashboard'
import { DISTRIBUTED_SHARE } from './limits'
import { TENURE_MONTHS, TENURE_SCALE_MONTHS } from './org'
import type { Rule } from './rules'

/**
 * Values derived from the mock data: sums, percentages, bar widths and the
 * colour thresholds the screens rely on. Kept in one place so the same number
 * never gets computed two slightly different ways.
 */

/** Groups thousands with a space — the separator used for UZS amounts. */
export function fmt(v: number): string {
  return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

/**
 * One decimal place, using the locale's decimal separator: a comma for Uzbek
 * and Russian, a dot for English. Thousands stay space-separated in every
 * locale — the tables rely on tabular figures lining up.
 */
export function formatDecimal(value: number, t: Dict): string {
  return String(Math.round(value * 10) / 10).replace('.', t.decimalSeparator)
}

export function category(key: CategoryKey, t: Dict) {
  return { key, name: t.cat[key], icon: CATEGORY_ICONS[key] }
}

/** Total spend for the period. */
export function totalSpent(mult: number): number {
  return USAGE.reduce((acc, u) => acc + u.amount, 0) * mult
}

/** Budget breakdown for a month or a quarter. */
export function budgetSummary(budget: number, period: 'month' | 'quarter', t: Dict) {
  const mult = period === 'quarter' ? 3 : 1
  const total = budget * mult
  const distributed = Math.round(total * DISTRIBUTED_SHARE)
  const spent = totalSpent(mult)
  return {
    mult,
    total,
    distributed,
    spent,
    reserve: total - distributed,
    left: distributed - spent,
    spentPct: `${Math.round((spent / total) * 100)}%`,
    freePct: `${Math.round(((distributed - spent) / total) * 100)}%`,
    utilPct: `${formatDecimal((spent / distributed) * 100, t)}%`,
  }
}

/** Spend rows per category, with bar widths normalised against the largest. */
export function usageRows(t: Dict, mult: number) {
  return USAGE.map((u) => {
    const c = category(u.key, t)
    return {
      name: c.name,
      icon: c.icon,
      width: `${Math.round((u.amount / USAGE_MAX) * 100)}%`,
      util: `${u.util}%`,
      amount: fmt(u.amount * mult),
    }
  })
}

/** Caption for the tenure a category unlocks at. */
export function tenureLabel(months: number, t: Dict): string {
  const i = TENURE_MONTHS.indexOf(months)
  return t.tenures[i >= 0 ? i : 0]
}

/**
 * A row of the tenure ladder. Past 55% of the scale the caption flips to the
 * right edge, otherwise it hugs the start of the unlocked segment — at that
 * point there is no room left to place it inside.
 */
export function ladderRow(key: CategoryKey, months: number, t: Dict) {
  const pct = (months / TENURE_SCALE_MONTHS) * 100
  const right = pct > 55
  const c = category(key, t)
  return {
    name: c.name,
    icon: c.icon,
    pct: `${pct}%`,
    from: tenureLabel(months, t),
    labelLeft: right ? 'auto' : `${pct}%`,
    labelRight: right ? '0' : 'auto',
    labelJustify: right ? 'flex-end' : 'flex-start',
  }
}

/** A rule card: captions, category chips and the layout of its tenure scale. */
export function ruleView(rule: Rule, index: number, t: Dict) {
  const pct = (TENURE_MONTHS[rule.tenure] / TENURE_SCALE_MONTHS) * 100
  return {
    id: rule.id,
    num: `${t.ruleWord} ${index + 1}`,
    statusLabel: t.ruleActive,
    people: `${rule.people} ${t.peopleUnit}`,
    dept: t.depts[rule.dept],
    grade: t.grades[rule.grade],
    tenure: t.tenures[rule.tenure],
    cats: rule.cats.map((k) => category(k, t)),
    pct: `${pct}%`,
    opensAt: TENURE_MONTHS[rule.tenure] === 0 ? t.opensImmediately : t.opensHere,
    openLeft: pct > 55 ? 'auto' : `${pct}%`,
    openRight: pct > 55 ? '0' : 'auto',
    openShift: pct > 55 || pct === 0 ? 'none' : 'translateX(-50%)',
    showRightTick: pct <= 55,
    showLeftTick: pct > 0,
    openColor: pct === 0 ? 'var(--text-muted)' : 'var(--accent)',
  }
}

/** A limits table row. The bar turns amber past 90% and red once nothing is left. */
export function limitRow(
  row: { name: string; dept: number; limit: number; spent: number },
  t: Dict,
) {
  const left = row.limit - row.spent
  const pct = Math.round((row.spent / row.limit) * 100)
  const tone = left === 0 ? 'danger' : pct >= 90 ? 'warning' : 'accent'
  return {
    name: row.name,
    dept: t.depts[row.dept],
    limit: fmt(row.limit),
    spent: fmt(row.spent),
    left: fmt(left),
    pct: `${pct}%`,
    barColor:
      tone === 'danger'
        ? 'var(--danger)'
        : tone === 'warning'
          ? 'var(--warning)'
          : 'var(--accent)',
    leftColor: tone === 'danger' ? 'var(--danger)' : 'var(--text-primary)',
  }
}
