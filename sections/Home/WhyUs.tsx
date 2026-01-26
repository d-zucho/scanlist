import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { WHY_US_STATS } from '@/constants'
import Image from 'next/image'

const WhyUs = () => {
  return (
    <section className='my-32'>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
          {/* left -- image */}
          <div className='flex-1'>
            <Image
              src={'/images/why-us2.png'}
              alt='Why Us?'
              width={500}
              height={500}
              className='w-full h-full object-cover'
            />
          </div>

          {/* right -- text content */}
          <div className='flex-1'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3 text-center md:text-left'>Why Choose SmartList?</h2>
            <div className='space-y-5 mt-5 md:mt-0 px-5 md:px-0'>
              {
                WHY_US_STATS.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className='flex flex-row items-center gap-5'>
                      <div className='w-fit p-2 bg-linear-to-br from-emerald-200 to-emerald-300 rounded-md shadow-[inset_-1px_-2px_4px_0px_rgba(0,0,0,0.2)] border-black/10 border'>
                        <Icon className='text-emerald-500' />
                      </div>
                      <div className=''>
                        <h3 className='text-xl font-semibold'>{stat.title}</h3>
                        <p className='text-my-text mt-1'>{stat.info}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUs