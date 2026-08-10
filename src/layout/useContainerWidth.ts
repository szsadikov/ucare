import { useEffect, useState } from 'react'

/** Layout breakpoints, in px. */
const MOBILE_MAX = 720
const TABLET_MAX = 1100

export type Breakpoints = {
  /** Measured canvas width, in px. */
  vw: number
  mob: boolean
  tab: boolean
}

/**
 * The layout switches on the width of its own container rather than the
 * viewport: `ResizeObserver` plus a `resize` listener. That keeps the
 * breakpoints meaningful when the app is embedded or previewed in a frame.
 */
export function useContainerWidth(host: HTMLElement | null): Breakpoints {
  const [vw, setVw] = useState(() =>
    typeof window === 'undefined' ? 1440 : window.innerWidth,
  )

  useEffect(() => {
    const el = host ?? document.body
    const onResize = () =>
      setVw(Math.round(el.getBoundingClientRect().width) || window.innerWidth)

    window.addEventListener('resize', onResize)
    let ro: ResizeObserver | undefined
    if (window.ResizeObserver) {
      ro = new ResizeObserver(onResize)
      ro.observe(el)
    }
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
      ro?.disconnect()
    }
  }, [host])

  return { vw, mob: vw < MOBILE_MAX, tab: vw >= MOBILE_MAX && vw < TABLET_MAX }
}
