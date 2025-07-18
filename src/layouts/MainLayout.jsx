import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <div className='min-h-dvh h-fit flex flex-col justify-between'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default MainLayout