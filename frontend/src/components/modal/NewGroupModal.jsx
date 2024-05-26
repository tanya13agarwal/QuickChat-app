import React , { useState } from 'react'
import { sampleUsers } from '../../data/sampleData'

import UserItem from '../shared/UserItem'

const NewGroupModal = () => {

  const [members , setMembers] = useState(sampleUsers);
  const [selectedMembers , setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => 
    prev.includes(id) 
      ? prev.filter((currElement) => currElement !== id)
      : [...prev , id]
    );
  };

  const SubmitHandler = () => {

  }

  const closeHandler = () => {

  }

  return (
    <div onAbort={closeHandler} className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-11/12 max-w-[400px] flex flex-col items-center justify-center rounded-lg border gap-5 bg-white p-6'>
          
            <p className='text-2xl font-semibold'>
                New Group
            </p>

            <input 
              type='text'
              placeholder='Group Name'
              className='form-style w-full focus:outline-none'
            />

            <span>
              Members
            </span>
            
            <div className='w-full'>
                {
                  members.map((user) => (
                    <li className='list-none'>
                      <UserItem 
                        key={user._id} 
                        user = {user} 
                        handler={selectMemberHandler}
                        isAdded = {selectedMembers.includes(user._id)} 
                      />
                    </li>
                  ))
                }
            </div>

            <div className='flex items-center w-full justify-evenly'>
                <button className='text-red text-md'>
                  Cancel
                </button>
                <button 
                  onClick={SubmitHandler}
                  className='bg-Btnblue text-white text-md w-[25%] p-2 rounded-md'
                >
                  Create
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default NewGroupModal