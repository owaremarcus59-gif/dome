import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

interface useravatarprops {
    className?:string,
    image:string
}
export default function UserAvatar(props:useravatarprops) {
  return (
    <div className=''>
        <Avatar>
            <AvatarImage 
            src={props.image ?? 'logo.png'} 
            alt={props.image}
            className='h-10 w-10 rounded-lg bg-accentColor' 
        />
        </Avatar>
    </div>
  )
}
