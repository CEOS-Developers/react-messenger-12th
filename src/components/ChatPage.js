import React from 'react';
import styled from 'styled-components';

import ListName from './ListName';
import FindForm from './FindForm';
import ChatList from './ChatList';

import { chatInfo } from './UserInfo';

const ChatPage = ({ handleisMenuBar, onChangeUserName, onChangeMessage }) => {
  return (
    <>
      <ListName name={'채팅'} />
      <FindForm />
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
