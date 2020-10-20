import React from 'react';
import styled from 'styled-components';

import ListName from './ListName';
import FindForm from './FindForm';
import MyList from './MyList';

import { chatInfo } from './UserInfo';

const ChatPage = () => {
  return (
    <>
      <ListName name={'채팅'} />
      <FindForm />
      {chatInfo.map((chat, index) => {
        return (
          <MyList
            key={index}
            userName={chat.name}
            userImage={chat.image}
            statusMessage={chat.lastMessage}
          />
        );
      })}
    </>
  );
};

export default ChatPage;
