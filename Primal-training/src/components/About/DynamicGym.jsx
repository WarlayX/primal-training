import DynamicImage from '../../assets/images/Dynamic-Image.png';

export default function DynamicGym() {
  return (
    <section>
      <div className='flex flex-col w-full md:flex-row md:m-auto md:h-93.75 xl:h-120 xl:max-h-180 xl:max-w-480'>

        <div className='w-full h-58.25 md:w-1/2 md:h-auto xl:w-[66.65%]'>
          <img
            src={DynamicImage}
            alt="Dynamic Gym" 
            className='w-full h-full object-cover'
          />
        </div>

        <div className='bg-primary-light flex flex-col justify-between gap-10 px-5 py-7.5 md:w-1/2 md:h-full xl:w-[33.35%] '>
          <h2 className='font-bold text-[28px] tracking-[-0.03em] leading-[0.91em]'>DYNAMIC OPEN GYM</h2>

          <p className='text-[15px] tracking-[-0.01em] leading-[1.31em] xl:text-[18px]'>
            At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.
          </p>
        </div>

      </div>
    </section>
  )
}