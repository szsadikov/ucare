import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Icon } from '../ds'
import { ToastContext, TOAST_MS } from './toastContext'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const flash = useCallback((message: string) => {
    window.clearTimeout(timer.current)
    setToast(message)
    timer.current = window.setTimeout(() => setToast(null), TOAST_MS)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <ToastContext.Provider value={flash}>
      {children}
      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 200 }}>
          <div className="uc-toast">
            <span
              className="uc-toast-dot"
              style={{ background: 'var(--success-bg)', color: 'var(--success)' }}
            >
              <Icon name="check" size={16} />
            </span>
            <span>
              <b>{toast}</b>
            </span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}
