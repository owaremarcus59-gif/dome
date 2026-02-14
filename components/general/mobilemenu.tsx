import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

interface mobilemenuprops {
    className?:string,
}

const MobileMenu = (props:mobilemenuprops) => {
  return (
    <div className={cn('',props.className)}>
        <Sheet>
            <SheetTrigger className='flex items-center'>
                <SheetClose asChild>
                    <>
                        <Menu size={38}/>
                    </>
                </SheetClose>
            </SheetTrigger>
            <SheetContent>

            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileMenu