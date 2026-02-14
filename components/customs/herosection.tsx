import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface herosectionprops {
    className?:string,

}

export const HeroSection = (props:herosectionprops) => {
  return (
    <div className={cn('p-4 ',props.className)} >
        <div className='flex flex-col gap-2 '>
            <h2 className='text-xl md:text-2xl lg:text-3xl'>Sell Anthing .</h2>
            <h4 className='text-2xl md:text-3xl lg:text-4xl'>We handle the Rest.</h4>
            <p className='text-sm md:text-lg lg:text-xl '>Buy and sell on the top-most secured platform for online business in the country.</p>
        </div>
        <div className='py-4'>
            <Button className='w-full bg-accentColor text-white hover:bg-accentColor hover:-translate-y-0.5 ease-out cursor-pointer hover:text-white hover:opacity-100 opacity-80 tracking-wide capitalize '>start selling </Button>
        </div>
    </div>
  )
}
