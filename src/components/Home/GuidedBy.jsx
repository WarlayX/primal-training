import GuideBy from '../../assets/images/GuidedBy.png'

export default function GuidedBy() {
  return (
    <section>
      <div className='flex flex-col w-full m-auto md:flex-row-reverse xl:h-120 xl:max-w-480 xl:max-h-180'>

        <div data-aos="zoom-in" data-aos-delay="200" className='w-full h-full md:h-auto md:w-[33.35%]'>
          <img 
            src={GuideBy} 
            alt="GuideBy Image"
            className='w-full h-full object-cover'
          />
        </div>


        
        <div className='bg-primary-light flex flex-col gap-1.5 p-5 border-b md:gap-12 md:w-[33.35%] xl:h-119.75 xl:gap-55 xl:pb-16.5'>
          <h2 
            className='font-bold text-[28px] tracking-[-0.03em] xl:text-[36px]'>
            DYNAMIC OPEN GYM
          </h2>
          <p 
            className='text-[15px] leading-[1.31] tracking-[-0.01em] xl:text-[17px]'>
            Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.
          </p>          
        </div>

        <div className='bg-primary-light flex flex-col gap-1.5 p-5 border-b md:gap-12 md:w-[33.35%] md:border-r xl:h-119.75 xl:gap-55 xl:pb-16.5 md:border-l'>
          <h2 
            className='font-bold text-[28px] tracking-[-0.03em] xl:text-[36px]'>
            GUIDED BY EXPERTS
          </h2>
          <p 
            className='text-[15px] leading-[1.31] tracking-[-0.01em] xl:text-[17px]'>
            We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.
          </p>
        </div>  
      




      </div>
    </section>
  )
}