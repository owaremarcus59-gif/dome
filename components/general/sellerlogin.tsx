import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface sellerprops {
    name:string,
    className?:string,
}

const SellerLoginBtn = (props: sellerprops) => {
  return (
    <div className={cn('',props.className)}>
        <Button className='tracking-wide bg-accentColor text-capitalize text-xs hover:bg-accentColor hover:text-white hover:-translate-y-0.5  text-white '>{props.name}</Button>
    </div>
  )
}

export default SellerLoginBtn