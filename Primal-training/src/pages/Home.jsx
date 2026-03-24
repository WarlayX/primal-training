import Hero from '../components/Home/Hero'
import GuidedBy from '../components/Home/GuidedBy'
import Discover from '../components/Home/Discover'
import CTASection from '../components/Home/CTASection'

export default function Home() {
  return (
    <div>
      <Hero />
      <GuidedBy />
      <Discover />
      <CTASection />
    </div>
  )
}