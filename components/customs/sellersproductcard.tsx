"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'

interface sellerprops {
    className?:string
    label : string
    image:string
    price :string
    status : string
}
export const SellersProductCard = (props:sellerprops) => {
    console.log(props.status)
  return (
    <div className={cn('p-0',props.className)}>
        <Card className='p-0 h-25'>
            <CardContent className='flex items-start justify-between p-4'>
                <div className='flex  gap-2 '>
                        <div className='h-50  object-contain max-w-lg overflow-hidden rounded-lg  '>
                            <Image
                                src={props.image}
                                alt={props.label}
                                width={70}
                                height={70}
                                className=' aspect-square rounded-lg '
                            />
                        </div>

                        <div className='flex flex-col gap-2  '>
                        <CardTitle className='text-xl capitalize '>
                            {props.label}
                        </CardTitle>
                        <CardDescription className='text-lg trackin-wide'>
                           GHC {props.price}
                        </CardDescription>
                        </div>
                </div>

                        <div className='flex gap-4  '>
                            <div className=''>
                                <Button className={` w-full capitalize tracking-wide text-bold text-lg text-white `}>
                                    {props.status}
                                </Button>
                            </div>
                            <div className=' flex gap-1'>

                            <Button className='text-white text-xl tracking-wide bg-accentColor '>Edit

                            </Button>
                            <Button className=' text-white  text-xl bg-accentColor'>View</Button>
                            </div>
                        </div>
            </CardContent>
        </Card>

    </div>
  )
}
