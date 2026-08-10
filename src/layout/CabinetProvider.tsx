import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { RULES, type Rule } from '../mock/rules'
import { CabinetContext, type CabinetValue } from './cabinetContext'

/**
 * State that has to survive navigation between dashboard screens: the rule set
 * and the budget period. The dashboard reads both, so it lives above the routes
 * rather than inside a single page.
 */
export function CabinetProvider({ children }: { children: ReactNode }) {
  const [rules, setRules] = useState<Rule[]>(RULES)
  const [period, setPeriod] = useState<'month' | 'quarter'>('month')

  const value = useMemo<CabinetValue>(
    () => ({
      rules,
      // Reach of a newly created rule is mocked with a random headcount.
      addRule: (rule) =>
        setRules((prev) => [
          ...prev,
          { ...rule, id: Date.now(), people: 6 + Math.round(Math.random() * 20) },
        ]),
      removeRule: (id) => setRules((prev) => prev.filter((r) => r.id !== id)),
      period,
      setPeriod,
    }),
    [rules, period],
  )

  return <CabinetContext.Provider value={value}>{children}</CabinetContext.Provider>
}
