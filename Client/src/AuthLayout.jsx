import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


const AuthLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Toaster />

    </>
  )
}

export default AuthLayout