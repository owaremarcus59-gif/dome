import React from 'react'
import HeroImageGrid from '../customs/heroimagegrid'
import { HeroSection } from '../customs/herosection'
import { cn } from '@/lib/utils';

interface heroprops {
  className?:string;
}

export default function Hero(props: heroprops) {
  return (
    <section className={cn("p-4 bg-secondaryColor md:pt-20",props.className)
    }>
        {/* hero 
            : hero section info
            : hero section images
        */}
        <div className="lg:flex lg:max-w-[80%] lg:mx-auto ">
          <HeroSection/>
          <HeroImageGrid 
          className='hidden lg:flex'
          />
        </div>
    </section>
  )
}
