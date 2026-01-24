import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const HomeCTA = () => {
  return (
    <section className='bg-linear-to-br from-dark-bg1 to-dark-bg2 py-20'>
      <MaxWidthWrapper>
        <div>
          <div className='text-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>Ready to Shop Smarter?</h2>
            <p className='text-white-foreground'>Join our community of happy shoppers and start saving money today.</p>
          </div>
          {/* app store buttons */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-6'>
            <Button className='py-8 px-8'>
              <Image src={'/icons/applelogo.svg'} alt='Apple App Store' width={24} height={24} className='w-auto' />
              <div className='flex flex-col items-start'>
                <span className='text-xs'>Download on the</span>
                <span className='text-lg'>App Store</span>
              </div>
            </Button>
            <Button variant={'secondary'} className='py-8 px-8'>
              <Image src={'/icons/googleplaylogo.svg'} alt='Google Play Store' width={24} height={24} className='w-auto' />
              <div className='flex flex-col items-start'>
                <span className='text-xs'>Get it on</span>
                <span className='text-lg'>Google Play</span>
              </div>
            </Button>
          </div>
          <div>
            <p className='text-white-foreground-accent text-center'>Free to download. Premium features available.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeCTA