'use client'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from '@/constants'
import { buttonVariants } from '../ui/button'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname() 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='size-6 hover:cursor-pointer hover:text-primary' />
      </SheetTrigger>
      <SheetContent className='border-none'>
        <SheetHeader className='sr-only'>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            ScanList
          </SheetDescription>
        </SheetHeader>
            <div className='bg-linear-to-br from-primary to-emerald-400 w-full h-20 flex items-center justify-center rounded-b-2xl shadow-md shadow-black/20'>
              <Link href={'/'} className='flex items-center gap-2'>
              <Image
                src={'/logo.svg'}
                alt="Logo"
                width={40}
                height={40}
                className='shadow-md shadow-black/20 rounded-[12px]'
              />
              <span className='text-xl font-bold text-white'>ScanList</span>
            </Link>
            </div>
        <div className='pl-5 pt-10'>
          <nav>

            {/* nav items */}
            <div className='flex flex-col gap-8'>
              {
                NAV_ITEMS.map((item) => (
                  <div key={item.name} className='relative w-[120px] group py-2 flex items-center'>
                    <div className={`${pathname === item.href ? 'absolute' : 'hidden'}  left-0 w-1 bg-linear-to-b from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-300 ease-in-out'`} />
                    <Link
                      href={item.href}
                      className={`text-xl hover:text-black font-medium transition-colors duration-200 ease-in-out ml-3 ${pathname === item.href ? 'text-black' : 'text-my-nav-text'}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))
              }
            </div>

            {/* buttons */}
            <div className='flex flex-col items-center gap-4 my-10'>
              <Link
                href={'/login'}
                className={buttonVariants({ variant: 'default', size: 'lg', className: 'w-3/4 text-xl font-bold' })}
              >Login</Link>
              <Link
                href={'/register'}
                className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-3/4 text-xl font-bold' })}
              >Register</Link>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav