import React from 'react'
import Header from './Header'

const AppLayout = () => {
  return (
    <>
        <Header/>
        <div className="grid grid-cols-12 gap-4">
            <div>first</div>
            <div className="bg-red">second</div>
            <div>third</div>
        </div>
    </>
  )
}

export default AppLayout