import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";



const UserItem = ({user , handler , handlerIsLoading , isAdded = false}) => {

    const {name , _id , avatar} = user;

  return (
    <ul>
        <div className='flex items-center transition-all duration-200 gap-[1rem] w-[100%]'>
            <img
                src={avatar}
                alt='Avatar'
                className='w-[70px] h-[70px]  border-[5px] rounded-full border-white'
            />

            <span className='overflow-hidden text-ellipsis w-full'>
                {name}
            </span>

            {
                isAdded ? (
                    <button
                        className='text-white bg-red rounded-full'
                        onClick={() => handler(_id)}
                        disabled = {handlerIsLoading}
                    >
                        <IoMdRemove className='text-4xl'/>
                    </button>
                ) : (
                    <button
                        className='text-white bg-Btnblue rounded-full'
                        onClick={() => handler(_id)}
                        disabled = {handlerIsLoading}
                    >
                        <IoMdAdd className='text-4xl'/>
                    </button>
                ) 
            }

        </div>
    </ul>
  )
}

export default UserItem