import SideBar from '@/components/general/sidebar'
import { sidebarlinks } from '@/lib/constant'
import React from 'react'
import MainSellerDashBoard from './asidedash'

export default function page() {
  return (
    <section className='w-full max-w-full'>                                         
        {/* 
        
          sidebar 
          welcome comment
          navigation icon tray
          totalling cards
          products   grid
          sellers product card
        */}
        <SideBar 
            links={sidebarlinks}
            title='adwadie'
            className=''

        >
        <MainSellerDashBoard
          className=''
        /></SideBar>
    </section>
  )
}
