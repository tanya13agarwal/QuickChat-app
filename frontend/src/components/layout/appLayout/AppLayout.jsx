import React, { useState, useSelector } from 'react'
import Header from '../Header'
import ChatList from './ChatList';
import { sampleChats } from '../../../data/sampleData';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import useMyChatsQuery from "../../../redux/api/api";
import { useDispatch } from 'react-redux';
import { useErrors } from '../../../hooks/hook'; 

import { Drawer } from '@mui/material';
import { getSocket } from '../../../utils/socket';

const AppLayout = () => ( WrappedComponent ) => {
  
  return (props) => {
    
    const params = useParams();
    const chatId = params.chatId;

    const socket = getSocket();
    const dispatch = useDispatch();


    // const [onlineUsers, setOnlineUsers] = useState([]);

    const { isMobile } = useSelector((state) => state.misc);
    const { user } = useSelector((state) => state.auth);
    // const { newMessagesAlert } = useSelector((state) => state.chat);

    
    const { isLoading, data, isError, error, refetch } = useMyChatsQuery("");

    useErrors([{ isError, error }]);

    useEffect(() => {
      getOrSaveFromStorage({ key: NEW_MESSAGE_ALERT, value: newMessagesAlert });
    }, [newMessagesAlert]);
  

    const handleDeleteChat = (e, chatId, groupChat) => {
      // dispatch(setIsDeleteMenu(true));
      // dispatch(setSelectedDeleteChat({ chatId, groupChat }));
      // deleteMenuAnchor.current = e.currentTarget;
    };

    const handleMobileClose = () => dispatch(setIsMobile(false));

    // const newMessageAlertListener = useCallback(
    //   (data) => {
    //     if (data.chatId === chatId) return;
    //     dispatch(setNewMessagesAlert(data));
    //   },
    //   [chatId]
    // );

    // const newRequestListener = useCallback(() => {
    //   dispatch(incrementNotification());
    // }, [dispatch]);

    // const refetchListener = useCallback(() => {
    //   refetch();
    //   navigate("/");
    // }, [refetch, navigate]);

    // const onlineUsersListener = useCallback((data) => {
    //   setOnlineUsers(data);
    // }, []);

    // const eventHandlers = {
    //   [NEW_MESSAGE_ALERT]: newMessageAlertListener,
    //   [NEW_REQUEST]: newRequestListener,
    //   [REFETCH_CHATS]: refetchListener,
    //   [ONLINE_USERS]: onlineUsersListener,
    // };

    // useSocketEvents(socket, eventHandlers);


    return (
      <>
          <Header/>

          {/* drawer  */}
          {
            isLoading ?  
              (<div/>) : (
              <Drawer open={isMobile} onClose={handleMobileClose}>
                <ChatList className="w-[70vw]"
                chats={data?.chats}
                chatId={chatId}
                handleDeleteChat={handleDeleteChat}/>
              </Drawer>)
          }

          <div className="grid lg:grid-cols-4 md:grid-cols-3 h-[calc(100vh-4rem)]">

              <div className = "hidden md:block h-[100%]">
                  {isLoading ? 
                    (<div/>) : 
                    (<ChatList
                        chats={data?.chats}
                        chatId={chatId}
                        handleDeleteChat={handleDeleteChat}
                    />)
                  }
              </div> 

              <div className="col-span-2  h-[100%]">
                <WrappedComponent {...props}/>
              </div>
              <div className = "hidden lg:block h-[100%] bg-black">
               
                <Profile user={user} />
              </div>

          </div>
      </>
    )
  }
}
export default AppLayout 


