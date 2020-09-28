import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import MessageView from './MessageView';

import arrayMessage from './arrayMessage.json';

export default function ChattingScreen() {
  const [messageArr, setMessageArr] = useState(arrayMessage.arrMessage);

  const [personNowSending, setPersonNowSending] = useState(false);

  function addMessageToArr(messageText) {
    if (!messageText) {
      alert('메시지부터 입력하세요 ^^');
      return;
    }

    setMessageArr([
      ...messageArr,
      {
        user: personNowSending,
        content: messageText,
      },
    ]);
  }

  function getHeaderSubmit(person) {
    setPersonNowSending(!personNowSending);
  }

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [messageArr]);

  return (
    <Wrapper>
      <Header onSubmit={getHeaderSubmit}></Header>
      <pre><br /></pre>
      <MessageView messageArr={messageArr} />
      <pre><br /></pre>
      <MessageSender {...{ addMessageToArr }}></MessageSender>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;
