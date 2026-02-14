import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface loginbtnprops {
  name:string,
  className?:string,
}

const LoginBtn = (props:loginbtnprops) => {
  return (
    <div className={cn('', props.className)}>
      <Button variant="link" className='tracking-wide  text-accentColor text-xs'>{props.name}</Button>
    </div>




    
  )
}

export default LoginBtn