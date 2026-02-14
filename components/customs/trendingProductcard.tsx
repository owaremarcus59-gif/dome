"use client";
import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { cn, formatCurrency } from '@/lib/utils'


interface trendingproductcardprops {
  src:string,
  className?:string,
  label:string,
  price:string,
}

const TrendingProductCard = (props:trendingproductcardprops) => {
  return (
    <div className={cn('',props.className)}>
        <Card className='w-full p-0'>
            <CardContent className='w-full p-0'>
                <div className='bg-secondaryColor w-full object-cotain rounded-t-lg '>
                  <Image
                    alt=''
                    src={props.src}
                    width={200}
                    height={200}
                    className='max-w-[85%] aspect-square mx-auto '
                  />
                </div>
                <div className='flex flex-col gap-2 py-2'>
                  <CardTitle className='text-sm uppercase font-bold text-center'>
                    {props.label}
                  </CardTitle>
                  <CardDescription className='text-center'>
                    {formatCurrency (props.price)}
                  </CardDescription>
                  <div className='w-full p-2'>

                  <Button className='w-full bg-accentColor text-white hover:bg-accentColor hover:-translate-y-0.5 ease-out cursor-pointer hover:text-white hover:opacity-100 opacity-80 tracking-wide capitalize '>
                    add to cart
                  </Button>
                  </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default TrendingProductCard