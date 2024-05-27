import React, { useRef, useEffect, useState, useCallback } from 'react';

import AppLayout from '../components/layout/appLayout/AppLayout';

import { MdAttachFile } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppLayout from '../components/layout/appLayout/AppLayout';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../data/sampleData';
import MessageComponent from '../components/shared/MessageComponent';
import { getSocket } from '../utils/socket';

// ye kya h check kro?
import { useInfiniteScrollTop } from "6pp";

import {
  ALERT,
  CHAT_JOINED,
  CHAT_LEAVED,
  NEW_MESSAGE,
  START_TYPING,
  STOP_TYPING,
} from "../../../backend/constants/events";

import { useChatDetailsQuery, useGetMessagesQuery } from "../redux/api/api";
import { useErrors, useSocketEvents } from "../hooks/hook";
import { setIsFileMenu } from '../redux/reducers/misc';

 
const Chat = (chatId, user) => {

  const socket = getSocket();

  // const user = {
  //   _id:"123344",
  //   name : "Madara Uchihaa"
  // }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [fileMenuAnchor, setFileMenuAnchor] = useState(null);

  const [IamTyping, setIamTyping] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const typingTimeout = useRef(null);

  const chatDetails = useChatDetailsQuery({ chatId, skip: !chatId });

  const oldMessagesChunk = useGetMessagesQuery({ chatId, page });

  const { data: oldMessages, setData: setOldMessages } = useInfiniteScrollTop(
    containerRef,
    oldMessagesChunk.data?.totalPages,
    page,
    setPage,
    oldMessagesChunk.data?.messages
  );

  const errors = [
    { isError: chatDetails.isError, error: chatDetails.error },
    { isError: oldMessagesChunk.isError, error: oldMessagesChunk.error },
  ];

  const members = chatDetails?.data?.chat?.members;

  const messageOnChange = (e) => {
    setMessage(e.target.value);

    if (!IamTyping) {
      socket.emit(START_TYPING, { members, chatId });
      setIamTyping(true);
    }

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(() => {
      socket.emit(STOP_TYPING, { members, chatId });
      setIamTyping(false);
    }, [2000]);
  };

  const handleFileOpen = (e) => {
    dispatch(setIsFileMenu(true));
    setFileMenuAnchor(e.currentTarget);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Emitting the message to the server
    socket.emit(NEW_MESSAGE, { chatId, members, message });
    setMessage("");
  };

  useEffect(() => {
    socket.emit(CHAT_JOINED, { userId: user._id, members });
    dispatch(removeNewMessagesAlert(chatId));

    return () => {
      setMessages([]);
      setMessage("");
      setOldMessages([]);
      setPage(1);
      socket.emit(CHAT_LEAVED, { userId: user._id, members });
    };
  }, [chatId]);

  useEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (chatDetails.isError) return navigate("/");
  }, [chatDetails.isError]);

  const newMessagesListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;

      setMessages((prev) => [...prev, data.message]);
    },
    [chatId]
  );

  const startTypingListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;

      setUserTyping(true);
    },
    [chatId]
  );

  const stopTypingListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      setUserTyping(false);
    },
    [chatId]
  );

  const alertListener = useCallback(
    (data) => {
      if (data.chatId !== chatId) return;
      const messageForAlert = {
        content: data.message,
        sender: {
          _id: "djasdhajksdhasdsadasdas",
          name: "Admin",
        },
        chat: chatId,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, messageForAlert]);
    },
    [chatId]
  );

  const eventHandler = {
    // [ALERT] will go as strings now 
    [ALERT]: alertListener,
    [NEW_MESSAGE]: newMessagesListener,
    [START_TYPING]: startTypingListener,
    [STOP_TYPING]: stopTypingListener,
  };

  useSocketEvents(socket, eventHandler);

  useErrors(errors);

  const allMessages = [...oldMessages, ...messages];

  return chatDetails.isLoading ? (<div/>) : (

        <div className='h-[100%] w-full'>
        <div
          ref={containerRef}
          className='box-border p-[1rem] gap-[1rem] bg-grayColor h-[90%] overflow-x-hidden overflow-y-auto  '
        >
          {
            allMessages.map((message) => (
              <MessageComponent key={message._id} message = {message} user = {user} />
            ))
          }
        </div>    
  
        <form className='h-[10%]' onSubmit={submitHandler}>
            <div className='flex h-[100%] p-[1rem] items-center relative'>
              <button onClick={handleFileOpen}
               className='absolute rounded-full p-[0.5rem] left-[1.5rem] rotate-[30deg] text-lg'>
                  <MdAttachFile/>
              </button>
  
              <input
                placeholder='Type message here...' value={message} onChange={(e) => setMessage(e.target.value)}
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
        <FileMenu anchorE1={fileMenuAnchor}/>
      </div>
      )

};

export default AppLayout()(Chat);