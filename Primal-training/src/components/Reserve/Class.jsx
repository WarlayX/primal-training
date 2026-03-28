export default function Class () {

  const classes = [
  {
    title: 'STRENGTH',
    schedule1: 'Weekdays at 6AM',
    schedule2: 'Weekends and Holidays at 8AM',
    description: 'Build a foundation of raw power with our comprehensive weightlifting and strength training programs.'
  },
  {
    title: 'CONDITIONING',
    schedule1: 'Weekdays at 8AM',
    schedule2: 'Weekends and Holidays at 10AM',
    description: 'Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness. '
  },
  {
    title: 'COMMUNITY CLASSES',
    schedule1: '',
    schedule2: 'Everyday on the hour',
    description: 'Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.'
  }
];

  return (
    <section>
      <h1 
        className="text-left font-extrabold tracking-[-0.05em] py-5 px-5 text-[30px] md:text-[70px] xl:text-[90px]">
        BOOK A <span className="text-primary">SESSION</span>
      </h1>

      
      <div className='bg-primary-light grid grid-cols-1 md:grid-cols-3 md:h-120'>
        {classes.map((classItem, index) => (
          <div key={index} className="flex flex-col justify-between border p-7.5  md:p-5">

            <div className="flex flex-col gap-20 h-[312.89px] md:justify-between">

              <h2 
                className="font-bold tracking-[-0.03em] leading-[0.91em] text-[30px] xl:text-[45px] ">
                {classItem.title} 
              </h2>
              <div className="flex flex-col gap-6.25">
                <p className={`pb-[8.44px] md:text-[17px] xl:text-[19px] tracking-[-0.03em] leading-[1.31em] 
                  ${classItem.schedule1 ? 'border-b' : ''}`}>
                  {classItem.schedule1}
                </p>
                <p className="pb-[8.44px] border-b md:text-[17px] xl:text-[19px] tracking-[-0.03em] leading-[1.31em]"> {classItem.schedule2}</p>
                <p className="md:text-[17px] xl:text-[19px] tracking-[-0.03em] leading-[1.31em]">{classItem.description}</p>               
              </div>

            </div>

            <button className="tracking-[0.01em] leading-[1.10em] bg-primary px-4.25 py-3 rounded-lg hover:bg-black hover:text-white duration-300 ">
              RESERVE YOUR SPOT
            </button>

          </div>
        ))}
      </div>

      

    </section>
  ); 
}