import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { HOW_IT_WORKS_ITEMS } from '@/constants'
import { ListChecks } from 'lucide-react'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div>
          <div className='text-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold'>How It Works</h2>
            <p className='text-my-text'>Three simple steps to smarter shopping and saving money.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* cards */}
            {HOW_IT_WORKS_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return(
                <div key={index} className='bg-linear-to-br from-primary/20 via-primary/5 to-primary/15 p-5 rounded-md text-center mb-4 flex flex-col items-center shadow-lg w-full'>
                  <div className='flex flex-col items-center  border w-fit max-w-xs p-5 rounded-xl bg-linear-to-br from-primary/80 to-emerald-600 mb-4'>
                  <Icon className='text-white' />
                </div>
                <h3 className='text-xl font-semibold text-center mb-2'>{item.title}</h3>
                <p className='text-center text-my-text'>{item.description}</p>
              </div>)
})}
          </div>
        </div>        
      </MaxWidthWrapper>
    </section>
  )
}

export default HowItWorks