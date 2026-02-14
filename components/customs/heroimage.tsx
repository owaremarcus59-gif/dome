import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


interface heroimageprops {
    className?:string,
    item:string,
    index:number

}

export default function HeroImage(props: heroimageprops) {
  return (
    <div className={cn('',props.className)}>
            <Image
                src={props.item}
                alt={props.item}
                width={300}
                height={300}
                className='object-cover'

            />
    </div>
  )
}
