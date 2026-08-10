import type { CSSProperties, SVGProps } from 'react'
import {
  Activity,
  ArrowRight,
  Car,
  Check,
  ChevronLeft,
  Coffee,
  Dumbbell,
  GraduationCap,
  Home,
  Info,
  LayoutDashboard,
  LayoutGrid,
  Lock,
  Megaphone,
  Menu,
  MoreVertical,
  Pencil,
  Pill,
  Receipt,
  Repeat,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Stethoscope,
  Store,
  Table,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  User,
  UserX,
  Users,
  Utensils,
  Wallet,
  X,
} from 'lucide-react'

/**
 * Lucide wrapped to the uCare spec: 24 grid, 1.5px stroke, round caps.
 *
 * Names arrive as kebab-case strings ('layout-dashboard'), so the glyphs in use
 * are listed explicitly below — reaching into the package dynamically would
 * pull all fifteen hundred icons into the bundle. Add new icons to this map.
 */
type Glyph = React.ComponentType<SVGProps<SVGSVGElement>>

const GLYPHS: Record<string, Glyph> = {
  activity: Activity,
  'arrow-right': ArrowRight,
  car: Car,
  check: Check,
  'chevron-left': ChevronLeft,
  coffee: Coffee,
  dumbbell: Dumbbell,
  'graduation-cap': GraduationCap,
  home: Home,
  info: Info,
  'layout-dashboard': LayoutDashboard,
  'layout-grid': LayoutGrid,
  lock: Lock,
  megaphone: Megaphone,
  menu: Menu,
  'more-vertical': MoreVertical,
  pencil: Pencil,
  pill: Pill,
  receipt: Receipt,
  repeat: Repeat,
  'shield-check': ShieldCheck,
  'sliders-horizontal': SlidersHorizontal,
  smartphone: Smartphone,
  stethoscope: Stethoscope,
  store: Store,
  table: Table,
  target: Target,
  'trash-2': Trash2,
  'trending-down': TrendingDown,
  'trending-up': TrendingUp,
  user: User,
  'user-x': UserX,
  users: Users,
  utensils: Utensils,
  wallet: Wallet,
  x: X,
}

export type IconProps = {
  name: string
  size?: number
  strokeWidth?: number
  style?: CSSProperties
} & Omit<SVGProps<SVGSVGElement>, 'name' | 'style' | 'ref'>

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  style,
  ...rest
}: IconProps) {
  const Glyph = GLYPHS[name]

  const common: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: { flex: 'none', ...style },
    ...rest,
  }

  // An unknown name renders as an empty 24 square rather than throwing.
  if (!Glyph) return <svg {...common} />

  return <Glyph {...common} />
}
