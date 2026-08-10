import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { COMPANY_NAME } from '../../mock/org'
import { Icon } from '../ds'
import { LangSwitch } from './LangSwitch'

/** Side navigation items. */
const NAV = [
  { to: 'dashboard', icon: 'layout-dashboard', key: 'dash' },
  { to: 'people', icon: 'users', key: 'people' },
  { to: 'partners', icon: 'store', key: 'partners' },
  { to: 'rules', icon: 'sliders-horizontal', key: 'rules' },
  { to: 'limits', icon: 'wallet', key: 'limits' },
  { to: 'analytics', icon: 'trending-up', key: 'analytics' },
] as const

/** HR dashboard shell: top bar and side navigation. */
export function AppLayout() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const current = NAV.find((n) => pathname.startsWith(`/app/${n.to}`))

  return (
    // The dashboard is exactly one viewport tall and never scrolls itself, so
    // the top bar and the side navigation stay put and only <main> scrolls.
    // Otherwise the aside stretches to the content height and "Sign out" ends
    // up far below the fold.
    <div
      style={{
        width: '100%',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          flex: 'none',
          background: 'var(--blue-800)',
        }}
      >
        <div
          style={{
            width: 'var(--sidebar-w)',
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px 0 28px',
          }}
        >
          <img
            src="/logo-reversed-horizontal.svg"
            alt="uCare"
            style={{ height: 'var(--logo-cabinet-h)', width: 'auto' }}
          />
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            padding: '12px 32px',
          }}
        >
          <span style={{ font: 'var(--text-h3)', color: 'var(--on-brand)' }}>
            {current ? t.nav[current.key] : ''}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LangSwitch tone="dark" />
            <button
              onClick={() => navigate('/employee')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                height: 40,
                padding: '0 16px',
                border: '1px solid var(--on-brand-border-35)',
                borderRadius: 'var(--radius-md)',
                background: 'transparent',
                color: 'var(--on-brand)',
                font: 'var(--text-btn)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <Icon name="smartphone" size={16} />
              {t.employeeApp}
            </button>
            <span
              style={{
                width: 'var(--avatar)',
                height: 'var(--avatar)',
                borderRadius: 'var(--radius-full)',
                background: 'var(--on-brand-fill-16)',
                color: 'var(--on-brand)',
                display: 'grid',
                placeItems: 'center',
                font: 'var(--text-avatar)',
              }}
            >
              HR
            </span>
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch', flex: 1, minHeight: 0 }}>
        <aside
          style={{
            width: 'var(--sidebar-w)',
            flex: 'none',
            background: 'var(--surface)',
            borderRight: '1px solid var(--border)',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            // On a short viewport the sidebar scrolls, not the page.
            overflowY: 'auto',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 'none' }}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  height: 40,
                  padding: '0 12px',
                  border: 0,
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  textDecoration: 'none',
                  font: 'var(--text-nav)',
                  background: isActive ? 'var(--accent-subtle)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                })}
              >
                <Icon name={item.icon} size={20} />
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>
          <div
            style={{
              marginTop: 'auto',
              flex: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              className="uc-card uc-card--sunken"
              style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 4 }}
            >
              <span className="overline">{t.company}</span>
              <span style={{ font: 'var(--text-h3)' }}>{COMPANY_NAME}</span>
              <span className="body-s text-muted">{t.companySub}</span>
            </div>
            <button onClick={() => navigate('/')} className="uc-btn uc-btn--ghost">
              {t.logout}
            </button>
          </div>
        </aside>

        <main style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
          <div
            style={{
              padding: 'var(--pad-main)',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
