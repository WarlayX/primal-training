import AboutHero from '../components/about/AboutHero'
import OurVision from '../components/about/OurVision'
import DynamicGym from '../components/about/DynamicGym'
import Reconnect from '../components/about/Reconnect'
import CTASection from '../components/Home/CTASection'

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurVision />
      <DynamicGym />
      <Reconnect />
      <CTASection bg='bg-primary-light' Btnbg='bg-primary' />
    </div>
  )
}