import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from '@/constants'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className='size-6 hover:cursor-pointer hover:text-primary' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='sr-only'>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            ScanList
          </SheetDescription>
        </SheetHeader>
            <div className='bg-linear-to-br from-primary to-emerald-400 w-full h-20 flex items-center justify-center rounded-b-2xl shadow-md shadow-black/40'>
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
        <div className='px-2 pt-10'>
          <nav>

            {/* nav items */}
            <div className='mt-5 flex flex-col gap-4'>
              {
                NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='text-2xl font-medium hover:text-primary transition-colors duration-200 ease-in-out'
                  >
                    {item.name}
                  </Link>
                ))
              }
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav