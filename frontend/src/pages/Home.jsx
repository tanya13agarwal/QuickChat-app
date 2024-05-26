import React from 'react'

import AppLayout from '../components/layout/appLayout/AppLayout'

const Home = () => {
  return (
    <div className='text-xl p-[2rem] text-center bg-linkHover h-full'>
      Select a friend to chat
    </div>
  )
}

export default AppLayout()(Home);