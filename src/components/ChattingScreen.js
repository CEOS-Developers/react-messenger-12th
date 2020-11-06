import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import MessageView from './MessageView';

import arrayMessage from './arrayMessage.json';

export default function ChattingScreen() {
  const [messageArr, setMessageArr] = useState(arrayMessage.arrMessage);

  const [personSendingMsg, setPersonSendingMsg] = useState(false);

  function addMessageToArr(messageText) {
    if (!messageText) {
      alert('메시지부터 입력하세요 ^^');
      return;
    }

    setMessageArr([
      ...messageArr,
      {
        user: personSendingMsg,
        content: messageText,
      },
    ]);
  }

  function togglePersonSendingMsg() {
    setPersonSendingMsg(!personSendingMsg);
  }

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [messageArr]);

  return (
    <Wrapper>
      <Header {... { togglePersonSendingMsg }} personSendingMsg={personSendingMsg}></Header>
      <pre><br /></pre>
      <MessageView messageArr={messageArr} />
      <pre><br /></pre>
      <MessageSender {...{ addMessageToArr }}></MessageSender>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  background-color: #abc1d1;
`;
