import ChatItem from "../../shared/ChatItem";

const ChatList = ({
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <div className="w-[100%] flex flex-col">
        {
            chats.map((data , index) => {
                const {avatar, _id, name, groupChat, members} = data;

                const newMessageAlert = newMessagesAlert.find(
                    ({ chatId }) => chatId === _id
                );
                const isOnline = members?.some((member) =>
                    onlineUsers.includes(member)
                );
                console.log(onlineUsers)
                
                return (
                    <ChatItem
                      index={index}
                      newMessageAlert={newMessageAlert}
                      isOnline={isOnline}
                      avatar={avatar}
                      name={name}
                      _id={_id}
                      key={_id}
                      groupChat={groupChat}
                      sameSender = {chatId === _id}
                      handleDeleteChat={handleDeleteChat}
                    />
                );
            })}
    </div>
  )
}

export default ChatList