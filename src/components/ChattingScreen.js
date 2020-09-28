import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import MessageView from './MessageView';

import arrayMessage from './arrayMessage.json';

export default function ChattingScreen() {
  // 입력받은 메시지 저장소
  const [messageArr, setMessageArr] = useState(arrayMessage.arrMessage);

  // 현재 누구 프로필인지 판단재료
  const [personNowSending, setPersonNowSending] = useState(false);

  // 입력 받은 메시지를 메시지저장소에 추가
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

  // 프로필 변경 감지
  function getHeaderSubmit(person) {
    setPersonNowSending(!personNowSending);
  }

  // 메시지 보내지면 스크롤 내림
  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [messageArr]); // 프로필 변경시 scrollBy 작동 방지.

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
