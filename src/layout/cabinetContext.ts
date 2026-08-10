import { createContext, useContext } from 'react'
import type { Rule } from '../mock/rules'

export type CabinetValue = {
  rules: Rule[]
  addRule: (rule: Omit<Rule, 'id' | 'people'>) => void
  removeRule: (id: number) => void
  period: 'month' | 'quarter'
  setPeriod: (p: 'month' | 'quarter') => void
}

export const CabinetContext = createContext<CabinetValue | null>(null)

export function useCabinet(): CabinetValue {
  const ctx = useContext(CabinetContext)
  if (!ctx) throw new Error('useCabinet must be called inside <CabinetProvider>')
  return ctx
}
