import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from 'react'
import { useId } from 'react'

/** Labelled text input with an optional hint or error line. */
export type InputProps = {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  className?: string
  style?: CSSProperties
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'className'>

export function Input({
  label,
  hint,
  error,
  id,
  className = '',
  style,
  ...rest
}: InputProps) {
  const auto = useId()
  const fid = id || auto
  return (
    <div
      className={['uc-field', error && 'uc-field--error', className].filter(Boolean).join(' ')}
      style={style}
    >
      {label && <label htmlFor={fid}>{label}</label>}
      <input className="uc-input" id={fid} aria-invalid={error ? true : undefined} {...rest} />
      {(error || hint) && (
        <span className={error ? 'uc-hint uc-hint--error' : 'uc-hint'}>{error || hint}</span>
      )}
    </div>
  )
}

export type SelectOption = { value: string | number; label: string }

/** Labelled select, rendered from an options array or from children. */
export type SelectProps = {
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  options?: SelectOption[]
  className?: string
  style?: CSSProperties
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'style' | 'className'>

export function Select({
  label,
  hint,
  error,
  id,
  options = [],
  children,
  className = '',
  style,
  ...rest
}: SelectProps) {
  const auto = useId()
  const fid = id || auto
  return (
    <div
      className={['uc-field', error && 'uc-field--error', className].filter(Boolean).join(' ')}
      style={style}
    >
      {label && <label htmlFor={fid}>{label}</label>}
      <select className="uc-select" id={fid} aria-invalid={error ? true : undefined} {...rest}>
        {children ??
          options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
      </select>
      {(error || hint) && (
        <span className={error ? 'uc-hint uc-hint--error' : 'uc-hint'}>{error || hint}</span>
      )}
    </div>
  )
}
