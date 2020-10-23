import React from 'react';

import ListName from './ListName';
import FindForm from './FindForm';
import ChatList from './ChatList';

import { chatInfo } from './UserInfo';

const ChatPage = ({ handleisMenuBar, onChangeUserName, onChangeMessage }) => {
  return (
    <>
      <ListName name={'채팅'} />
      <FindForm holder={'채팅방 이름, 참여자 검색'} />
      {chatInfo.map((chat, index) => {
        return (
          <ChatList
            key={index}
            userName={chat.name}
            userImage={chat.image}
            lastMessage={chat.lastMessage}
            lastMessageTime={chat.lastMessageTime}
            handleisMenuBar={handleisMenuBar}
            onChangeUserName={onChangeUserName}
            onChangeMessage={onChangeMessage}
          />
        );
      })}
    </>
  );
};

export default ChatPage;
