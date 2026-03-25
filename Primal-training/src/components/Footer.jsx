import FooterImage from '../assets/images/Vector-Footer.png'
import Wordmark from '../assets/images/Wordmark.png'


export default function Footer() {
  return (
    <footer className='bg-primary-light'>
      <div className='flex flex-col gap-20 px-5 pt-6.75 pb-12.5 md:gap-42.25'>

        <div className='flex flex-col gap-7 md:flex-row md:justify-between'>
          <img 
            src={FooterImage} 
            alt="Primal Logo"
            className='w-37.25 md:w-[229.31px] '
          /> 
          <img src={Wordmark} alt="Primal Name" 
            className='md:w-83.25 md:h-20'
          />        
        </div>

        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>

          <div className='flex flex-col gap-3.75'>
            <p className='tracking-[-0.03em] leading-[1.31em] font-bold text-[22px]'>CONTACT</p>
            <div className='font-bold text-[14px]'>
              <p>Email: hello@primaltraining.com</p>
              <p>Phone: 203 555-5555</p>
            </div>
          </div>

          <div className='flex flex-col gap-3.75'>
            <p className='tracking-[-0.03em] leading-[1.31em] font-bold text-[22px]'>OPENING HOURS</p>
            <div className='font-bold text-[14px]'>
              <ul>
                <li>Monday - Friday: 5:00 - 23:00 </li>
                <li>Saturday: 8:00 - 16:00 </li>
                <li>Sunday: 8:00 - 13:00 </li>
                <li>Holidays: 8:00 - 16:00 </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-3.75'>
            <p className='tracking-[-0.03em] leading-[1.31em] font-bold text-[22px]'>SOCIALS</p>
            <div className='flex flex-col underline font-bold text-[14px]'>
              <a href="">Instagram</a>
              <a href="">X</a>
              <a href="">LinkedIn</a>
              <a href="">Spotify</a>
            </div>

          </div>

        </div>

        <p className='text-[12px] text-center pb-5 tracking-[-0.01em]'>
          © 2025 Primal Training. All rights reserved.
        </p>

      </div>
    </footer>
  )
}