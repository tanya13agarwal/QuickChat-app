import React from 'react'
import Header from '../Header'
import ChatList from './ChatList';
import { sampleChats } from '../../../data/sampleData';
import { useParams } from 'react-router-dom';

const AppLayout = () => {

  const {chatId} = useParams();
  // const chatId = params.chatId; 

  console.log(chatId);

  // const handleDeleteChat = (e, chatId, groupChat) => {
  //   // dispatch(setIsDeleteMenu(true));
  //   // dispatch(setSelectedDeleteChat({ chatId, groupChat }));
  //   // deleteMenuAnchor.current = e.currentTarget;
  // };
  return (
    <>
        <Header/> 
        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-4">

            <div className = "hidden md:block">
              <ChatList
                chats={sampleChats}
                chatId={chatId}
                newMessagesAlert={[{chatId, count: 4},]}
                onlineUsers={["1","2"]}
              />
            </div> 

            <div className="bg-red col-span-2">second</div>
            <div className = "hidden lg:block">third</div>

        </div>
    </>
  )
}
export default AppLayout 