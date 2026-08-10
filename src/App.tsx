import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { I18nProvider } from './i18n'
import { Shell } from './layout/Shell'
import { CabinetProvider } from './layout/CabinetProvider'
import { ToastProvider } from './components/layout/ToastProvider'
import { AppLayout } from './components/layout/AppLayout'
import Landing from './pages/Landing'
import Employee from './pages/Employee'
import Dashboard from './pages/app/Dashboard'
import People from './pages/app/People'
import Partners from './pages/app/Partners'
import Rules from './pages/app/Rules'
import Limits from './pages/app/Limits'
import Analytics from './pages/app/Analytics'

/**
 * Three surfaces, one per route group:
 * `/` the landing page, `/app/*` the HR dashboard, `/employee` the employee app.
 */
export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Shell>
          <ToastProvider>
            <CabinetProvider>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/app" element={<AppLayout />}>
                  <Route index element={<Navigate to="dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="people" element={<People />} />
                  <Route path="partners" element={<Partners />} />
                  <Route path="rules" element={<Rules />} />
                  <Route path="limits" element={<Limits />} />
                  <Route path="analytics" element={<Analytics />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </CabinetProvider>
          </ToastProvider>
        </Shell>
      </I18nProvider>
    </BrowserRouter>
  )
}
