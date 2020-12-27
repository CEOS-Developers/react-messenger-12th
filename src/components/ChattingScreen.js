import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

export default function ChattingScreen() {
  const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
  const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

  const MSGLIST = [
    { user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
    { user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
    { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
    { user: false, content: '안녕 은아' },
    { user: false, content: '뭐해 ?' },
    { user: true, content: '시원아 넌 최고의 팀장이야' },
    { user: false, content: '나도 아니까  ' },
    { user: false, content: '그만 말해줘도 돼' },
    { user: true, content: 'ㅠㅠ' },
  ];

  const [messageList, setMessageList] = useState(MSGLIST); //intial state값을 MSGLIST로
  const [newMessage, setNewMessage] = useState({
    user: false,
    content: '',
  });

  const changeInputMessage = (e) => {
    const { name, value } = e.target; //name으로 구별, value는 값 자체
    setNewMessage({
      ...newMessage,
      [name]: value,
    });
  };

  const addMessage = (e) => {
    e.preventDefault();
    if (newMessage.content) {
      setMessageList([...messageList, newMessage]);
    } else {
      alert('메시지를 입력하세요');
    }
    setNewMessage({ ...newMessage, content: '' });
  };

  const changeUser = (e) => {
    return newMessage.user
      ? setNewMessage({ user: false, content: newMessage.content })
      : setNewMessage({ user: true, content: newMessage.content });
  }; //삼항연산자로 수정

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [messageList]); //messageList가 변경됐을때 스크롤 내림

  return (
    <Wrapper>
      <Header
        {...{ changeUser }}
        user={newMessage.user ? '고은' : '정쿨'}
        imgUrl={newMessage.user ? EUNKO : COOL}
      ></Header>
      <Chatting>
        <Empty />
        {messageList.map((message, index) => {
          return (
            <MessageRow sending={!message.user} key={index}>
              <Image src={message.user ? EUNKO : COOL} />
              <Content>{message.content}</Content>
            </MessageRow>
          );
        })}
      </Chatting>
      <MessageSender {...{ changeInputMessage, newMessage, addMessage }} />
      <Empty />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #abc1d1;
  height: 100%;
`;
const Empty = styled.div`
  height: 100px;
  background: #abc1d1;
`;
const Chatting = styled.div`
  display: flex;
  flex-direction: column;
`;
const MessageRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.sending ? 'row-reverse' : 'row')};
  background: #abc1d1;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
  //safari에서는 image hegiht를 조정해 주어야한다. 드디어 해결!!
  object-fit: cover;
  padding: 10px;
  border-radius: 80px;
  flex-shrink: 0;
`;
const Content = styled.div`
  background: white;
  border-radius: 0.7rem;
  margin: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-align: center;
`;
