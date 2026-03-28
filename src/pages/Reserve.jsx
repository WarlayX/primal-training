import Class from '../components/Reserve/Class'
import CTASection from '../components/Home/CTASection'

export default function Reserve() {
  return (
    <div>
      <Class />
      <CTASection 
        subtitle = 'PRIMAL PERSONAL TRAINING' 
        paragraph =  'Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.'
        flexDirection = 'flex-col-reverse'
      />
    </div>
  )
}