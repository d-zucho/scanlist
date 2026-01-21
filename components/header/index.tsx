'use client'
import { NAV_AUTH_ITEMS, NAV_ITEMS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, buttonVariants } from '../ui/button'
import MobileNav from './MobileNav'



const Header = () => {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <header className='py-4 border-b border-primary'>
      <div className="container mx-auto px-2 md:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-4'>
          <Link href={'/'} className='flex items-center gap-2'>
            <Image
              src={'/logo.svg'}
              alt="Logo"
              width={32}
              height={32}
            />
            <span className='text-xl font-bold'>ScanList</span>
            </Link>
              <nav className='flex items-center gap-2'>
                {
                  NAV_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${pathname === item.href ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 ease-in-out`}
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </nav>
                </div>
              <div className='flex items-center gap-2'>
                
                  <Link
                    href={'/login'}
                    className={buttonVariants({ variant: 'default', className: 'px-5 py-2' })}
                  >Login</Link>
                  <Link
                    href={'/register'}
                    className={buttonVariants({ variant: 'outline', className: 'px-5 py-2' })}
                  >Register</Link>
                <MobileNav />
              </div>
        </div>
      </div>
    </header>
  )
}

export default Header