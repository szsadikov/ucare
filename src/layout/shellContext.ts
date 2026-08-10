import { createContext, useContext } from 'react'
import type { Layout } from './breakpoints'
import type { Breakpoints } from './useContainerWidth'

export type ShellValue = Breakpoints & { l: Layout }

export const ShellContext = createContext<ShellValue | null>(null)

export function useShell(): ShellValue {
  const ctx = useContext(ShellContext)
  if (!ctx) throw new Error('useShell must be called inside <Shell>')
  return ctx
}
