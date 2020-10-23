import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import ChattingMessage from './ChattingMessage';

import JINOIMAGE from '../images/JINOIMAGE.jpg';

const ChattingScreen = ({ WHO_MESSAGE }) => {
  const [userStatus, setUserStatus] = useState(true);
  const [messageList, setMessageList] = useState(WHO_MESSAGE);

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [messageList]);

  // switch User function
  const toggleUser = () => {
    setUserStatus(!userStatus);
  };

  const handleMessageList = (newMessage) => {
    setMessageList([...messageList, newMessage]);
  };

  return (
    <Screen>
      <Header
        userImage={userStatus ? messageList[0].opponent : JINOIMAGE}
        toggleUser={toggleUser}
        userName={userStatus ? messageList[0].opponentName : '나'}
      ></Header>
      {messageList.slice(1).map((message, k) => {
        return (
          <ChattingMessage
            key={k}
            messageSender={message.user}
            messageContent={message.content}
          />
        );
      })}
      <MessageSender
        status={userStatus}
        handleMessageList={handleMessageList}
      ></MessageSender>
      <BottomSpace />
    </Screen>
  );
};

export default ChattingScreen;

const Screen = styled.div`
  height: 100vh;
  padding-top: 80px;
  background-color: #abc1d1;
`;

const BottomSpace = styled.div`
  height: 75px;
`;
