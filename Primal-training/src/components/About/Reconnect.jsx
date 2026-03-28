import ReconnectImage from '../../assets/images/Reconnect.png';

export default function Reconnect() {
  return (
    <section>
      <div 
        data-aos="zoom-out" data-aos-delay="200"
        style={{backgroundImage: `url(${ReconnectImage})`}} 
        className='h-120 bg-cover bg-center bg-no-repeat flex items-end md:p-5 xl:h-180'>
          <h2 className='text-white text-left align-bottom font-extrabold tracking-[-0.05em] leading-none py-5 px-5 text-[30px] md:text-[35px] md:w-[67.5%] xl:w-[47.65%] xl:text-[45px]'>
            WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.
          </h2>
      </div>
    </section>
  )
}