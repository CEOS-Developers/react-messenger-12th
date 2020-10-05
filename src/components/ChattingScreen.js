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

  const [messageList, setMessage] = useState(MSGLIST);
  const [newMessage, setNewMessage] = useState({
    user: false,
    content: '',
  });

  const addNewChat = (e) => {
    e.preventDefault();
    if (newMessage.content === '') {
      alert('type something!!');
      return;
    }
    setMessage([...messageList, newMessage]);
    setNewMessage({ ...newMessage, content: '' });
  };


  const changeInputChat = (e) => {
    const { name, value } = e.target; //name으로 구별, value는 값 자체
    setNewMessage({
      ...newMessage,
      [name]: value,
    });
  };

  const changeUser = (e) => {
    return newMessage.user
      ? setNewMessage({ user: false, content: newMessage.content })
      : setNewMessage({ user: true, content: newMessage.content });
  };

  useEffect(() => {
    window.scrollBy(1000, document.body.scrollHeight);
  }, [newMessage]);

  return (
    <Wrapper>
      <Header
        {...{ changeUser }}
        user={newMessage.user ? '고은' : '정쿨'}
        imgURL={newMessage.user ? EUNKO : COOL}
      ></Header>
      <MessageList>
        {messageList.map((message, index) => {
          if (message.user) {
            return (
              <ChatLine left>
                <Profile src={EUNKO} width='50' height='50' />
                <ChatBox left>{message.content}</ChatBox>
              </ChatLine>
            );
          }
          return (
            <ChatLine>
              <ChatBox>{message.content}</ChatBox>
              <Profile src={COOL} width='50' height='50' />
            </ChatLine>
          );
        })}
      </MessageList>
      <MessageSender
        {...{ addNewChat }}
        {...{ newMessage }}
        {...{ changeInputChat }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #abc7d1;
`;

const MessageList = styled.div`
  background-color: #abc7d1;
  overflow-y: hidden;
  padding: 100px 10px;
`;

const ChatLine = styled.div`
  display: flex;
  justify-content: center;
  clear: both;
  float: ${(props) => (props.left ? 'left' : 'right')};
`;
const Profile = styled.img`
  border-radius: 50%;
  margin-top: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
`;
const ChatBox = styled.div`
display:table;
background: white;
padding 1rem; 
margin:15px 10px 0px 10px;
font-size:15px;
box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);

`;
