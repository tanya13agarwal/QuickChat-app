import React from 'react'

import GroupList from "../../pages/Groups"

const Drawer = ({open , close , GroupList}) => {
  return (
    <div className='w-full '>
        {GroupList}
    </div>
  )
}

export default Drawer