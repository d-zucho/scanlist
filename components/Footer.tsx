import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { NAV_ITEMS } from '@/constants'

const Footer = () => {
  return (
    <footer className='py-20'>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row max-md:gap-10 items-center md:justify-between mb-8'>
          <div>
            {/* Logo */}
            <div className='flex items-center gap-4 mb-4'>
              <Link href={'/'} className='flex items-center gap-2'>
                <Image
                  src={'/logo.svg'}
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <span className='text-xl font-bold'>ScanList</span>
              </Link>
            </div>
            <p className='text-sm flex flex-col text-my-text'>
              <span>Making grocery shopping effortless,</span>
              <span>one scan at a time.</span>
            </p>
          </div>
          <div className='flex gap-7 md:flex-col md:gap-3'>
            {
              NAV_ITEMS.map((item) => (
                <Link key={item.name} href={item.href} className='text-my-text hover:text-primary transition-colors duration-300'>
                  {item.name}
                </Link>
              ))
            }
          </div>
        </div>
          <div className='pt-8 border-t border-my-border'>
            <p className='text-xs text-my-text max-md:text-center'>&copy; 2025 SmartList. All rights reserved.</p>
          </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer