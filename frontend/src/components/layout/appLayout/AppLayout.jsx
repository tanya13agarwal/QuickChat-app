import React, { useState } from 'react'
import Header from '../Header'
import ChatList from './ChatList';
import { sampleChats } from '../../../data/sampleData';
import { useParams } from 'react-router-dom';
import Profile from './Profile';

const AppLayout = () => ( WrappedComponent ) => {
  
  return (props) => {
    
    const params = useParams();
    const chatId = params.chatId;
    

    const handleDeleteChat = (e, chatId, groupChat) => {
      // dispatch(setIsDeleteMenu(true));
      // dispatch(setSelectedDeleteChat({ chatId, groupChat }));
      // deleteMenuAnchor.current = e.currentTarget;
    };
    return (
      <>
          <Header/> 
          <div className="grid lg:grid-cols-4 md:grid-cols-3 h-[calc(100vh-4rem)]">

              <div className = "hidden md:block h-[100%]">
                <ChatList
                  chats={sampleChats}
                  chatId={chatId}
                  handleDeleteChat={handleDeleteChat}
                />
              </div> 

              <div className="col-span-2  h-[100%]">
                <WrappedComponent {...props}/>
              </div>
              <div className = "hidden lg:block h-[100%] bg-black">
                <Profile/>
              </div>

          </div>
      </>
    )
  }
}
export default AppLayout 


