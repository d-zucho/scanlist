import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { HERO_STATS } from '@/constants'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full bg-linear-to-br from-primary/40 via-white to-primary/30 py-10'>
      <MaxWidthWrapper>
        <div className='flex flex-col gap-10 md:flex-row items-center justify-between text-center md:text-left'>
          {/* Left -- Text Content */}
          <div className='flex-1'>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-5xl lg:text-6xl'>Scann. Add.<br />Shop Smart</h1>
              <p className='text-lg lg:text-xl max-w-lg'>Never forget an item again. Scan products at home and
                automatically add them to your grocery list. Shopping made effortless.</p>
                <div className='flex gap-3 justify-center md:justify-start'>
                  {/* Buttons */}
                  <Button>
                    <Image src={'/icons/camera.svg'} alt='camera' width={16} height={16} />
                    <span>Start Scanning</span>
                  </Button>
                  <Button variant={'outline'}>
                    Watch Demo
                  </Button>
                </div>
            </div>
              <div className='mt-5'>
                {/* Stats */}
                <div className='flex gap-3 justify-center md:justify-start'>
                  {HERO_STATS.map((stat) => (
                    <div key={stat.description} className='flex flex-col items-center gap-1'>
                      <span className='font-bold text-2xl'>{stat.stat}</span>
                      <span className='text-sm text-muted-foreground'>{stat.description}</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
          {/* Right -- Image */}
          <div className='flex-1'>
        
              <div className='p-5 bg-white rounded-2xl relative'>
                <div className='absolute top-0 left-0 w-full h-full bg-primary rounded-2xl -z-10 rotate-6 max-w-[600px]' />
                <Image
                  src={'/images/hero.png'}
                  alt='hero'
                  width={500}
                  height={500}
                  className='w-full h-full object-contain z-20 max-w-[600px]'
                />
              </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero