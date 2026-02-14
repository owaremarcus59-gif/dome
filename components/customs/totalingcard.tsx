import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'

interface totalingcardprops {
    className:string
    icon:any
    value:number
    label:string

}
export default function TotalingCard(props:totalingcardprops) {
  return (
    <div className={cn('w-full',props.className)}>
          <Card className='shadow-lg hover:-translate-y-0.5  ease-out cursor-pointer '>
            <CardContent className='flex   flex-col gap-4 p-4'>
               <div className='flex gap-2 mx-auto '>
                    <props.icon className="text-accentColor" size={30}/>
                    <CardTitle className='text-2xl'>
                        {props.value}
                    </CardTitle>
                    
               </div>
               <CardDescription className='text-xl text-center capitalize'>
                {props.label}
               </CardDescription>
            </CardContent>
          </Card>  
    </div>
  )
}
