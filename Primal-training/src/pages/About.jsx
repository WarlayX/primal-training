import AboutHero from '../components/About/AboutHero'
import OurVision from '../components/About/OurVision'
import DynamicGym from '../components/About/DynamicGym'
import Reconnect from '../components/About/Reconnect'
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