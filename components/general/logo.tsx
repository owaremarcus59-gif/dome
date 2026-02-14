import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <div className='flex items-center '>
            <Image
                src="/logo.png"
                alt='logo image'
                width={50}
                height={50}
                priority={true}
                className='object-cover '
            />
   
        <p className='flex items-center font-extrabold tracking-wide'>Adwadie</p>
    </div>
  )
}
