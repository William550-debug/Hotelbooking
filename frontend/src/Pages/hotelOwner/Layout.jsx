import React from 'react'
import Navbar from '../../Components/hotelOwner/Navbar.jsx'
import SideBar from '../../Components/hotelOwner/SideBar.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' flex flex-col h-screen'>
        <Navbar />
        <div className="flex h-full">
            <SideBar />
            <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                <Outlet />
            </div>
        </div>
      
    </div>
  )
}

export default Layout
