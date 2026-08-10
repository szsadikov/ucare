import { SiteHeader } from '../components/landing/SiteHeader'
import { Hero } from '../components/landing/Hero'
import {
  Categories,
  Difference,
  HowItWorks,
  Problems,
  Voices,
} from '../components/landing/Sections'
import { ScreenCaps } from '../components/landing/ScreenCaps'
import {
  Objections,
  PartnersBlock,
  PilotCta,
  PilotForm,
  SiteFooter,
} from '../components/landing/Closing'

/**
 * The landing page. Sections are composed in the order they appear on screen.
 */
export default function Landing() {
  return (
    <div style={{ width: '100%', background: 'var(--surface)' }}>
      <SiteHeader />
      <Hero />
      <Problems />
      <Voices />
      <Difference />
      <HowItWorks />
      <Categories />
      <ScreenCaps />
      <Objections />
      <PartnersBlock />
      <PilotCta />
      <PilotForm />
      <SiteFooter />
    </div>
  )
}
