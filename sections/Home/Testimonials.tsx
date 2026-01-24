import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import TestimonialCard from '@/components/TestimonialCard'
import { TESTIMONIALS } from '@/constants'

const Testimonials = () => {
  return (
    <section className='my-32'>
      <MaxWidthWrapper>
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold'>What Our Users Say</h2>
          <p className='text-my-text'>Join thousands of happy shoppers</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:justify-items-center'>
          {
            TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))
          }
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Testimonials