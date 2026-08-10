import { createContext, useContext } from 'react'

/** A toast stays on screen for 2600 ms. */
export const TOAST_MS = 2600

export const ToastContext = createContext<((message: string) => void) | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be called inside <ToastProvider>')
  return ctx
}
