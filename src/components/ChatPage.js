import React, { useState } from 'react';

import ListName from './ListName';
import FindForm from './FindForm';
import ChatList from './ChatList';

import { chatInfo } from './UserInfo';

const ChatPage = ({ onChangeMessage }) => {
  const [chatInformation, setUserInfomation] = useState(chatInfo);
  const onChangeName = (n) => {
    const list = chatInfo.filter((chat) => {
      return chat.name === n;
    });
    setUserInfomation(list);
  };
  return (
    <>
      <ListName name={'채팅'} />
      <FindForm
        holder={'채팅방 이름, 참여자 검색'}
        onChangeName={onChangeName}
      />
      {chatInformation.map((chat, index) => {
        return (
          <ChatList
            key={index}
            userName={chat.name}
            userImage={chat.image}
            lastMessage={chat.lastMessage}
            lastMessageTime={chat.lastMessageTime}
            onChangeMessage={onChangeMessage}
          />
        );
      })}
    </>
  );
};

export default ChatPage;
