import React from 'react'
import Header from './Header'

const AppLayout = () => {
  return (
    <>
        <Header/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-4">
            <div className = "hidden md:block">first</div> 
            <div className="bg-red col-span-2">second</div>
            <div className = "hidden lg:block">third</div>
        </div>
    </>
  )
}

export default AppLayout