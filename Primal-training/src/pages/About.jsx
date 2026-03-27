import AboutHero from '../components/About/AboutHero'
import DynamicGym from '../components/About/DynamicGym'
import Reconnect from '../components/About/Reconnect'
import CTASection from '../components/Home/CTASection'

export default function About() {
  return (
    <div>
      <AboutHero />
      <DynamicGym />
      <Reconnect />
      <CTASection 
        bg='bg-primary-light' 
        btnBg='bg-primary' 
      />
    </div>
  )
}