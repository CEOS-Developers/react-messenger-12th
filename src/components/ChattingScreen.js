import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import MessageLine from './MessageLine';

export default function ChattingScreen() {
  const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
  const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

  const MSGLIST = [
    { user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
    { user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
    { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
    { user: false, content: '안녕 은아' },
    { user: false, content: 'ㅁㅎ?' },
    { user: true, content: '시원아 넌 최고의 팀장이야' },
    { user: false, content: '나도 아니까  ' },
    { user: false, content: '그만 말해줘도 돼' },
    { user: true, content: 'ㅠㅠ' },
  ];

  const [currentUser, setCurrentUser] = useState(false); // 현재 채팅하는 사람
  const [newMessageList, setNewMessageList] = useState(MSGLIST); // Re-Rendering하기 위하여 생성

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [newMessageList]);

  const addMessageToList = (message) => {
    setNewMessageList(
      newMessageList.concat([
        {
          user: currentUser,
          content: message,
        },
      ])
    );
  };

  const changeUser = () => {
    setCurrentUser(!currentUser);
  };

  const chatting = newMessageList.map((msg, index) => {
    return (
      <MessageLine key={index} user={msg.user} profileImg={msg.user ? EUNKO : COOL} message={msg.content}></MessageLine>
    );
  });

  return (
    <Wrapper>
      <Header user={currentUser ? '고은' : '정쿨'} profileImg={currentUser ? EUNKO : COOL} {...{ changeUser }}></Header>
      <EmptyChat></EmptyChat>
      {chatting}
      <EmptyChat></EmptyChat>
      <MessageSender addToList={addMessageToList}></MessageSender>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 0;
`;

const EmptyChat = styled.div`
  height: 80px;
}
`;
