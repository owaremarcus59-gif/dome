import { SellersProductCard } from '@/components/customs/sellersproductcard'
import TotalingCard from '@/components/customs/totalingcard'
import UserAvatar from '@/components/general/avatar'
import { Button } from '@/components/ui/button'
import { myproducts, totalcardlist } from '@/lib/constant'
import { cn } from '@/lib/utils'
import { Bell, Menu } from 'lucide-react'
import React from 'react'

interface mainsellerprops {
    className?:string

}

export default function MainSellerDashBoard(props:mainsellerprops) {
  return (
    <section className={cn(' w-full',props.className)}>
        <div className='p-4 flex justify-between w-full shadow-lg z-20 '>
            <p>welcome Kwame!</p>
            <div className='flex gap-1  '>
                <Bell/>
                <UserAvatar image=''/>
                <Menu/>
            </div>
        </div>

        <div className='flex items-center w-[80%] mx-auto   md:pt-10'>
            {totalcardlist.map((item, index)=> {
                return <TotalingCard 
                    className='p-4'
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    key={index}
                />
            })}
        </div>

        <div className='max-w-[80%] mx-auto  md:pt-10 flex flex-col '>
            <div className='flex items-center justify-between pt-5  '>
                <h2 className='text-2xl font-extrabold'>My Products</h2>
                <Button className='text-lg hover:-translate-y-0.5 cursor-pointer text-accentColor capitalize' variant={'link'}>view all</Button>
            </div>

            <div className='flex flex-col gap-6 mt-10 '>
                {myproducts.map((item, index) => {
                    return <SellersProductCard key={index} {...item}/>
                })}
            </div>

        </div>

    </section>
)
}
