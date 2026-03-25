export default function CTASection( { bg = 'bg-primary', Btnbg = 'bg-primary-light' } ) {
  return (
    <section className={`${bg}`}>
      <div className='text-center px-5 py-30 md:px-17.25 md:py-30 border-b-2'>
        <div className="h-106.25 flex flex-col justify-center items-center gap-4.5 md:h-52.75 md:gap-6 xl:h-120 xl:gap-10">
          <p className='tracking-[-0.03em] leading-[1.00em] text-[15px] md:font-medium xl:text-[17px]'>
            WHAT WE BELIEVE IN
          </p>
          <h3 className='tracking-[-0.05em] leading-[1.00em] font-extrabold text-[44px] md:text-[57px]'>
            JOIN THE PRIMAL TRIBE TODAY!
          </h3>
          <div>
            <button className={` ${Btnbg} rounded-[5px] px-4.25 py-3 cursor-pointer hover:text-white hover:bg-black transition-colors duration-300`}>
              RESERVE YOUR SPOT
            </button>
          </div>       
        </div>
      </div>
    </section>
  )
}