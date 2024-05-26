import React from 'react'
import { sampleNotifications } from '../../data/sampleData'

const NotificationModal = () => {

  const friendRequestHandler = ( {_id , accept} ) => {

  }

  return (
    <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-11/12 max-w-[400px] flex flex-col items-center justify-center rounded-lg border gap-5 bg-white p-6'>
            <p className='text-2xl font-semibold'>
                Notifications
            </p>
            {/* <ul className='w-full'> */}
              {
                sampleNotifications.length > 0 ? 
                (
                  sampleNotifications.map(({sender , _id}) => 
                  <NotificationItem 
                    key={_id}
                    sender = {sender}
                    _id = {_id}
                    handler = {friendRequestHandler}
                  />
                ) 
                ) 
                : (
                <span className='flex items-center'>
                  0 notifications
                </span>
              )
              }
            {/* </ul> */}
            
        </div>
        
    </div>
  )
};

const NotificationItem = ({sender , _id , handler}) => {
  const {name , avatar} = sender 
  return (
    <ul>
        <div className='flex items-center  gap-[1rem] w-[100%]'>
            <img
                src={avatar}
                alt='Avatar'
                className='w-[70px] h-[70px]  border-[5px] rounded-full border-white'
            />

            <span className='overflow-hidden text-ellipsis w-full '>
                {`${name} sent you a friend request`}
            </span>

            <div className='flex flex-col md:flex-row gap-2'>
              <button 
              className='text-Btnblue'
              onClick={() => handler({_id , accept : true})}>
                Accept
              </button>
              <button
                  className='text-red'
                  onClick={() => handler({_id , accept : false})}
              >
                Reject
              </button>
            </div>

        </div>
    </ul>
  )
}

export default NotificationModal