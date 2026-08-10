import type { ButtonHTMLAttributes, ReactNode } from 'react'

/** Button variants and sizes as defined by the design system. */
const VARIANT = {
  primary: '',
  secondary: 'uc-btn--secondary',
  ghost: 'uc-btn--ghost',
  danger: 'uc-btn--danger',
} as const

const SIZE = { sm: 'uc-btn--sm', md: '', lg: 'uc-btn--lg' } as const

export type ButtonProps = {
  variant?: keyof typeof VARIANT
  size?: keyof typeof SIZE
  loading?: boolean
  block?: boolean
  icon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  block = false,
  icon = null,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    'uc-btn',
    VARIANT[variant],
    SIZE[size],
    block && 'uc-btn--block',
    loading && 'uc-btn--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={cls} disabled={disabled} aria-busy={loading || undefined} {...rest}>
      {loading ? <span className="uc-spinner" /> : icon}
      {children}
    </button>
  )
}

export type IconButtonProps = {
  label: string
  size?: 'sm' | 'md'
} & ButtonHTMLAttributes<HTMLButtonElement>

/** Square icon-only button; `label` becomes the accessible name. */
export function IconButton({
  label,
  size = 'md',
  children,
  className = '',
  ...rest
}: IconButtonProps) {
  const cls = ['uc-iconbtn', size === 'sm' && 'uc-iconbtn--sm', className]
    .filter(Boolean)
    .join(' ')
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  )
}
