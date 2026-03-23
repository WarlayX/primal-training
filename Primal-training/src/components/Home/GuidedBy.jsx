import GuideBy from '../../assets/images/GuidedBy.png'

export default function GuidedBy() {
  return (
    <section>
      <div className='flex flex-col justify-center md:flex-row-reverse md:w-200 md:h-75 xl:w-7xl xl:h-120 xl:max-w-480 xl:max-h-180 mx-auto'>

        <div>
          <img 
            src={GuideBy} 
            alt="GuideBy Image"
            className='h-119.75 w-full md:w-[266.67px] md:h-75 xl:w-[426.67px] xl:h-119.75'
          />
        </div>

        <div className='bg-primary-light flex flex-col gap-1.5 p-5 border-b md:gap-12 md:w-[266.67px] xl:w-[426.67px] xl:h-119.75 xl:gap-55 xl:pb-16.5'>
          <h2 
            className='font-bold text-[28px] tracking-[-0.03em] xl:text-[36px]'>
            DYNAMIC OPEN GYM
          </h2>
          <p 
            className='text-[15px] leading-[1.31] tracking-[-0.01em] xl:text-[17px]'>
            Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.
          </p>          
        </div>

        <div className='bg-primary-light flex flex-col gap-1.5 p-5 border-b md:gap-12 md:w-[266.67px] md:border-r xl:w-[426.67px] xl:h-119.75 xl:gap-55 xl:pb-16.5 md:border-l'>
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