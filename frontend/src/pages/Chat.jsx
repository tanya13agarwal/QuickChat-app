import React, { useRef } from 'react';
import { MdAttachFile } from "react-icons/md";
import { IoMdSend } from "react-icons/io";


import AppLayout from '../components/layout/appLayout/AppLayout';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../data/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {

  const containerRef = useRef(null);

  const user = {
    _id:"123344",
    name : "Madara Uchihaa"
  }

  return (
    <div className='h-[100%] w-full'>
      <div
        ref={containerRef}
        className='box-border p-[1rem] gap-[1rem] bg-grayColor h-[90%] overflow-x-hidden overflow-y-auto  '
      >
        {
          sampleMessage.map((message) => (
            <MessageComponent key={message._id} message = {message} user = {user} />
          ))
        }
      </div>    

      <form className='h-[10%]'>
          <div className='flex h-[100%] p-[1rem] items-center relative'>
            <button className='absolute rounded-full p-[0.5rem] left-[1.5rem] rotate-[30deg] text-lg'>
                <MdAttachFile/>
            </button>

            <input
              placeholder='Type message here...'
              className='w-[100%] h-[100%] border-none outline-none p-0 pl-[3rem] pr-[3rem] bg-grayColor '
            />

            <button 
              className='bg-baseColor text-white ml-[1rem] p-[0.5rem] rounded-full  hover:bg-darkBaseColor'
              type='submit'
            >
                <IoMdSend className=''/> 
            </button>
          </div>
      </form>
      <FileMenu />
    </div>
  )
}

export default AppLayout()(Chat);