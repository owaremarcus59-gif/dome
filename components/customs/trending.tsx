import { trendings } from '@/lib/constant'
import { cn } from '@/lib/utils'
import React from 'react'
import TrendingProductCard from './trendingProductcard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { CardAction } from '../ui/card'

interface trendingprops {
    className?:string,
}
export const Trending = (props: trendingprops) => {
  return (
    <section className={cn("w-full pt-10 relative ",props.className)}>
        <Carousel>
            <CarouselContent  className='flex flex-col w-full relative '>

                <div className='grid md:grid-cols-1 lg:grid-cols-4'>
                    {trendings.map((item, index) => {
                       return <CarouselItem className='shadow-lg' key={index}>
                     <TrendingProductCard

                        {...item}
                        />
                        
                        </CarouselItem>
                    })}
           
                </div>
            </CarouselContent>
            
                <CarouselPrevious
                    className='z-10 bg-accentColor text-white'
                />
                <CarouselNext className='z-10 bg-accentColor text-white'/>
              
    
        </Carousel>
    </section>
  )
}
