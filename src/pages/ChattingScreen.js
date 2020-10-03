import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Header from '../components/Header';
import MessageSender from '../components/MessageSender';
import MessageLine from '../components/MessageLine';

// Data
import CHAT_L_DATA from '../resources/ChatL.json';
import FRIEND_L_DATA from '../resources/FriendL.json';
const MESSAGE_LIST = [
  { user: true, content: '안녕하세요 개발자분들~!' },
  { user: true, content: '카카오톡이랑 비슷하게 구현해보는중이에요!' },
  { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니다~' },
  { user: false, content: '안녕 정욱이형' },
  { user: false, content: 'ㅁㅎ?' },
  { user: true, content: '너가 만든 거 구경중이야' },
  { user: true, content: '너무 못 만들었는데?' },
  { user: false, content: '형은 못 생겼어' },
  { user: true, content: '인정..' },
];

export default function ChattingScreen({ match }) {
  const isChat = match.url.split('/')[1] === 'chat' ? true : false;
  const index = match.params.index;

  const OPPONENT_PROFILE = isChat
    ? CHAT_L_DATA.data[
        CHAT_L_DATA.data.findIndex((item) => {
          return `${item.idx}` === index;
        })
      ]
    : FRIEND_L_DATA.data[
        FRIEND_L_DATA.data.findIndex((item) => {
          return `${item.idx}` === index;
        })
      ];
  const MY_PROFILE_IMG =
    'https://user-images.githubusercontent.com/56102421/94894116-af3bd580-04c3-11eb-87d0-d77e6794203e.jpeg';

  const [currentUser, setCurrentUser] = useState(false); // 현재 채팅하는 사람
  const [newMessageList, setNewMessageList] = useState(MESSAGE_LIST); // Re-Rendering하기 위하여 생성

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
      <MessageLine
        key={index}
        user={msg.user}
        profileImg={msg.user ? OPPONENT_PROFILE.image : MY_PROFILE_IMG}
        message={msg.content}
      ></MessageLine>
    );
  });

  return (
    <Wrapper>
      <Header
        user={currentUser ? OPPONENT_PROFILE.name : '이재용'}
        profileImg={currentUser ? OPPONENT_PROFILE.image : MY_PROFILE_IMG}
        {...{ changeUser }}
      ></Header>
      <EmptyChat></EmptyChat>
      {chatting}
      <EmptyChat></EmptyChat>
      <MessageSender addToList={addMessageToList}></MessageSender>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // width: 100%;
  height: 100%;

  margin-left: 70px;
  padding: 0;

  background-color: #abc1d1;
`;

const EmptyChat = styled.div`
  height: 80px;
}
`;
