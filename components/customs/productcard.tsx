"use client"
import { cn, configpath, formatCurrency } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

interface productcardprops {
    className?:string
    image:string,
    label: string,
    price:string
    id: number

}
export const ProductCard = (props: productcardprops) => {

    const productpath = configpath(props.label)

    
   

  return (
    <Link   href={`products/${props.id}`} className={cn('hover:-translate-y-0.5 hover:',props.className)}>
        
        <Card className='shadow-lg w-[20em] p-0'>
            <CardContent className='p-0'>
                <div className='object-contain w-full h-[20%] overflow-hidden aspect-square rounded-t-lg'>
                    <Image
                        src={props.image}
                        alt={props.label}
                        width={300}
                        height={300}
                        className='object-contain w-full rounded-t-lg '
                    />
                </div>
                <div className='p-2 flex flex-col gap-4 shadow-lg items-center'>
                    <CardTitle className='text-xl font-extrabold tracking-big capitalize text-center'>
                        {props.label}
                    </CardTitle>
                    <CardDescription>{formatCurrency(props.price)}</CardDescription>
                </div>
            </CardContent>
        </Card>

    </Link>
  )
}
