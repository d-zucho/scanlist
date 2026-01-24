import { Star } from 'lucide-react';
import { Card } from './ui/card';
import Image from 'next/image';

interface TestimonialCardProps {
    name: string;
    title: string;
    description: string;
    image: string;
}

const TestimonialCard = ({ name, title, description, image }: TestimonialCardProps) => {
  return (
    <Card className='p-5 max-w-sm bg-card'>
      <div className='flex flex-col gap-4'>
        {/* stars */}
        <div className='flex gap-0'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} fill='yellow' className='text-yellow-300 size-4' />
          ))}
        </div>
        <div>
          <p className='text-testimonial-text'>{description}</p>
        </div>
        <div className='flex gap-2 items-center'>
            <Image 
              src={image}
              alt={name}
              width={50}
              height={50}
            />
            <div>
              <p className='text-title font-bold'>{name}</p>
              <p className='text-testimonial-title text-sm'>{title}</p>
            </div>
          </div>
        
      </div>
    </Card>
  )
}

export default TestimonialCard