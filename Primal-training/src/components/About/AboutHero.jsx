import AboutImage from '../../assets/images/About-Image.png';

export default function AboutHero() {
  return (
    <section>
      <h1 
        className="text-left font-extrabold tracking-[-0.05em] leading-none py-5 px-5 text-[30px] md:text-[70px] xl:text-[90px]">
        ABOUT US.
      </h1>

      <div className='flex flex-col-reverse w-full md:flex-row md:m-auto xl:h-120 xl:max-h-180 xl:max-w-480' >
        <div className='bg-primary px-5 py-7.5 md:w-1/2 xl:w-[66.65%]'>
          <div className='flex flex-col justify-between gap-14 md:h-full '>
            <h2 className='font-extrabold text-[28px] tracking-[-0.03em] leading-[0.91em] md:text-[36px] xl:text-[45px]'> 
              TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU.
            </h2> 
            <div className='flex flex-col gap-2'>
              <h5 className='font-bold text-[22px] tracking-[-0.03em] leading-[1.31em]'>
                OUR VISION
              </h5>
              <p className='text-[15px] tracking-[-0.01em] leading-[1.31em] xl:text-[17px]'>
                Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.
              </p>
            </div>
          </div>
        </div>

        <div className='w-full h-58.25 md:w-1/2 md:h-auto xl:w-[33.35%] '>
          <img 
            src={AboutImage}
            alt="About Us"
            className='w-full h-full object-cover'
          />
        </div>

      </div>

    </section>
  )
}