import { HOME_STAT_BANNER } from '@/constants'
import MaxWidthWrapper from './MaxWidthWrapper'

const HomeStatBanner = () => {
  return (
    <div className='bg-primary mt-32 py-20'>
      <MaxWidthWrapper>
        {/* <div className='flex flex-col md:flex-row gap-12 md:gap-0 justify-around items-center'> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12'>
          {
            HOME_STAT_BANNER.map((stat, index) => (
              <div key={index} className='text-white text-center'>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>{stat.stat}</p>
                <p className='text-white/80'>{stat.info}</p>
              </div>
            ))
          }
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomeStatBanner