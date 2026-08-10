import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { layout } from './breakpoints'
import { useContainerWidth } from './useContainerWidth'
import { ShellContext, type ShellValue } from './shellContext'

/**
 * Measures the root node once and hands the resulting layout down to every
 * section, so each page reads breakpoints through `useShell()` rather than
 * observing the window on its own.
 */
export function Shell({ children }: { children: ReactNode }) {
  const [host, setHost] = useState<HTMLDivElement | null>(null)
  const bp = useContainerWidth(host)
  const value = useMemo<ShellValue>(() => ({ ...bp, l: layout(bp) }), [bp])

  return (
    <div
      ref={setHost}
      style={{
        background: 'var(--bg)',
        color: 'var(--text-primary)',
        font: 'var(--text-body)',
        minHeight: '100vh',
      }}
    >
      <ShellContext.Provider value={value}>{children}</ShellContext.Provider>
    </div>
  )
}
