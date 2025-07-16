import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelReg from './Components/HotelReg'
import Layout from './Pages/hotelOwner/Layout'
import Dashboard from './Pages/hotelOwner/Dashboard'
import AddRoom from './Pages/hotelOwner/AddRoom'
import ListRoom from './Pages/hotelOwner/ListRoom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/rooms' element={<AllRooms/>}></Route>
          <Route path='/rooms/:id' element={<RoomDetails />}></Route>
          <Route path='/my-bookings' element={<MyBookings />}></Route>
          <Route path='/owner' element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path='add-room' element={<AddRoom/>}></Route>
              <Route path='list-room' element={<ListRoom/>}></Route>
          
          </Route>

        </Routes>



      </div>
      <Footer />

    </div>
  )
}

export default App
