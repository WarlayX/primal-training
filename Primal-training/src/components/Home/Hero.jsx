import HeroImage from '../../assets/images/Hero.png'


export default function Hero() {
  return (
    <section>

      <h1 
        className="text-center font-extrabold tracking-[-0.05em] leading-none py-5 px-5 text-[30px] md:text-[70px] xl:text-[90px]">
        TRAIN HARD.  <span className="text-primary">LIVE BETTER</span>
      </h1>

      <div className='bg-primary-light flex flex-col w-full m-auto md:flex-row xl:h-120 xl:max-h-180 xl:max-w-480'>

        <div className='w-full h-full md:h-auto md:w-[66.65%]'>
          <img 
            src={HeroImage} 
            alt="Hero Image" 
            className='w-full h-full object-cover'  
          />
        </div>
         
        <div className='flex flex-col bg-primary-light gap-6.75 p-5 md:gap-13.25 md:w-[33.35%] xl:h-120 xl:gap-40.75'>   
                
          <h2 
            className='text-[28px] font-bold text-left align-text-top text-wrap leading-[0.91] tracking-[-0.03em] md:text-[36px] md:h-16.5 md:w-56.5 xl:text-[45px] xl:h-20.5 xl:w-96.5' >
            FOR THE COMMITTED
          </h2>

          <div className='gap-5 flex flex-col md:w-full md:h-auto md:gap-10 xl:gap-15'>

            <p
              className='leading-[1.31] tracking-[-0.01em] xl:h-22 xl:text-[17px] md:h-30 md:text-[14px]' >
              Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
            </p>

            <div>
              <button 
                className='bg-primary text-white rounded-md hover:bg-primary-light hover:text-black transition-colors duration-300 tracking-[-0.01em] cursor-pointer py-2 px-4 md:text-[14px]'>
                About Us
              </button>
            </div>
            
          </div>
          
        </div>

      </div>

    </section>
  )
}