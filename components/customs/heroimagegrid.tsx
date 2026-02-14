import { heroimagegrid } from '@/lib/constant'
import React from 'react'
import HeroImage from './heroimage'
import { cn } from '@/lib/utils'

interface heroprops {
  className?:string
}

const HeroImageGrid = (props:heroprops) => {
  return (
    <div className={cn('',props.className)}>
        <div className='flex relative'>
            <HeroImage
              index={0}
              item={heroimagegrid[0]}
              className='relative left-10'
            />
            <HeroImage
              index={1}
              item={heroimagegrid[1]}
              className='relative -right-10'
            />
            <HeroImage
              index={2}
              item={heroimagegrid[2]}
              className='relative -bottom-30 -left-40'
            />
        </div>
    </div>
  )
}

export default HeroImageGrid