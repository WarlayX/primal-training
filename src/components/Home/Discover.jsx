import DiscoverImage from '../../assets/images/discover.png';

export default function Discover() {
  return (
    <section>

      <h1 
        className="text-center font-extrabold tracking-[-0.05em] leading-none py-5 px-5 text-[30px] md:text-[70px] xl:text-[90px]">
        JOIN THE<span className="text-primary"> COMMUNITY</span>
      </h1>

      <div className='flex flex-col-reverse w-full m-auto md:flex-row xl:h-150 xl:max-h-180 xl:max-w-480 '>

        <div className='bg-primary-light md:w-1/2 xl:w-[33.35%]'>
          <div className='text-center leading-[0.91] tracking-[-0.08em] p-5 border-b md:px-3.75 md:py-5'>
            <h2 className='font-semibold text-[28px] text-left md:text-[36px] '>DISCOVER YOUR POTENTIAL</h2>
          </div>

          <div className='flex flex-col gap-1.5 p-5 border-b'>
            <h3 className='font-bold text-[22px] tracking-[-0.03em] md:text-[25px] '>
              EXPERT COACHING
            </h3>
            <p className='leading-[1.31] tracking-[-0.03em] text-[15px] xl:text-[17px]'>
              Trainers who are passionate about your progress
            </p>
          </div>

          <div className='flex flex-col gap-1.5 p-5 border-b'>
            <h3 className='font-bold text-[22px] tracking-[-0.03em] md:text-[25px]'>
              RESULT DRIVEN PROGRAMS
            </h3>
            <p className='leading-[1.31] tracking-[-0.03em] text-[15px] xl:text-[17px]'>
              Workouts that deliver tangible, measurable results.
            </p>
          </div>

          <div className='flex flex-col gap-1.5 p-5 border-b'>
            <h3 className='font-bold text-[22px] tracking-[-0.03em] md:text-[25px]'>
              A SUPPORTIVE TRIBE
            </h3>
            <p className='leading-[1.31] tracking-[-0.03em] text-[15px] xl:text-[17px]'>
              A community that pushes you to be your best.
            </p>
          </div>

          <div className='px-5 py-7.5 flex justify-center items-center'>
            <button className='bg-primary text-white rounded-md hover:bg-primary-light hover:text-black transition-colors duration-300 tracking-[-0.01em] cursor-pointer py-7.5 px-5 md:text-[14px]'>
              VIEW CLASSES
            </button>
          </div>
        </div>
        

        <div data-aos="zoom-in" data-aos-delay="200" className='w-full h-full md:h-auto md:w-1/2 xl:w-[66.65%]'>
          <img 
            src={DiscoverImage}
            alt="Discover Image"
            className='w-full h-full object-cover'
          />
        </div>

      </div>

    </section>
  )
}