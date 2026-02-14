import { navlinks } from '@/lib/constant'
import { Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navlinks = () => {
  return (
    <div>
        <div className='lg:flex items-center hidden gap-4 text-sm'>
            {navlinks.map((link,index) => {
                return (
                    <Link href={link.ref} className='flex  items-center flex-row-reverse text-xs gap-6 p-0' key={index}>
                        <span className='text-lg hover:text-accentColor hover:text-xl hover:-translate-y-0.5 hover:ease-out'>{link.name}</span>
                      
                    </Link>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Navlinks