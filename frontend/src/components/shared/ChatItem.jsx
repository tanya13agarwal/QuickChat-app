import React from 'react'
import { Link } from 'react-router-dom';
import AvatarCard from './AvatarCard';

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
    }) => {
    return (

      <div className="text-black hover:bg-linkHover ">
      <Link
        className="p-0"
        to={`/chat/${_id}`}
        onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      >
        <div
            className= {`relative p-[1rem] flex gap-[1rem] items-center ${sameSender ? "bg-black text-white" : ""}
            transition-all duration-200`}
        >
          <AvatarCard avatar={avatar} />
   
          <div>
            <p>{name}</p>
            {newMessageAlert && (
              <span>{newMessageAlert.count} New Message</span>
            )}
          </div>
  
          {isOnline && (
            <div className='w-[10px] h-[10px] rounded-[50%] bg-red absolute top-[50%] right-[1rem] -translate-y-[50%]'
            />
          )}
        </div>
      </Link>
      </div>
    );
  };

export default ChatItem
 