import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface sidebarprops {
    className?:string
    links: any[]
    title:string
    children:React.ReactNode
}
export default function SideBar(props: sidebarprops) {
  return (
    <div className={cn('flex   ',props.className)}>
        <div className='shadow-lg flex flex-col gap-6  md:w-[290px]'  >
            <div className='flex items-center bg-accentColor h-20 gap-0   '>
                <div className='object-contain h-20 mx-auto  p-0 overflow-hidden'>
                    <Image
                        alt='logo'
                        src={'/logo-name.png'}
                        className=' z-10 p-0'
                        width={80}
                        height={80}
                    />
                </div>
                {/* <h2 className='capitalize text-3xl font-extrabold'>{props.title}</h2> */}
            </div>
            <div className='flex flex-col gap-6 p-4 '>
                {props.links.map((item,index:number) => {
                    return <Link className="flex gap-2 hover:-translate-y-0.5 hover:ease-out hover:text-accentColor" key={index} href={item.ref} >
                            <item.icon className="text-accentColor" size={35}/>
                            <p className='capitalize font-bold tracking-wide text-xl'>{item.label}</p>
                            
                    </Link>
                })}
            </div>
        </div>
        <div className='w-full'>
            {props.children}
        </div>
    </div>
  )
}
