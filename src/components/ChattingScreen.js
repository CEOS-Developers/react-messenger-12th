import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "./Header";
import MessageSender from "./MessageSender";

export default function ChattingScreen() {
  const EUNKO = "https://img.techpowerup.org/200908/eun.png";
  const COOL = "https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png";

  const MSGLIST = [
    { user: true, content: "안녕하세요 12기 프론트엔드 개발자분들" },
    { user: true, content: "저희의 대화를 마음껏 조작해보세요 💌" },
    { user: true, content: "상단에 프로필을 눌러서 발신자 변경하면 됩니당~" },
    { user: false, content: "안녕 은아" },
    { user: false, content: "뭐해 ?" },
    { user: true, content: "시원아 넌 최고의 팀장이야" },
    { user: false, content: "나도 아니까  " },
    { user: false, content: "그만 말해줘도 돼" },
    { user: true, content: "ㅠㅠ" },
  ];

  const [messageList, setMessageList] = useState(MSGLIST); //intial state값을 MSGLIST로
  const [newMessage, setNewMessage] = useState({
    user: false,
    content: "",
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
      alert("메시지를 입력하세요");
    }
    setNewMessage({ ...newMessage, content: "" });
  };

  const changeUser = (e) => {
    e.preventDefault();
    if (!newMessage.user) {
      //현재 시원님인 상태
      return setNewMessage({
        user: true, //누르면 고은님으로 change
        content: newMessage.content,
      });
    } else {
      return setNewMessage({
        user: false,
        content: newMessage.content,
      });
    }
  };

  useEffect(() => {
    window.scrollBy(0, window.innerHeight);
    window.scrollBy({ behavior: "smooth" });
  }, [messageList]); //messageList가 변경됐을때 스크롤 내림

  return (
    <Wrapper>
      <Header {...{ changeUser }} {...{ newMessage }}></Header>
      <Chatting className="chatting">
        <Empty />
        {messageList.map((message, index) => {
          if (message.user) {
            //user가 true인 경우=> 즉 고은님 대화만 보임
            return (
              <EUNKOMessage key={index}>
                <Image src={EUNKO} />
                <Content>{message.content}</Content>
              </EUNKOMessage>
            );
          } else {
            //시원님 대화창
            return (
              <COOLMessage key={index}>
                <Content>{message.content}</Content>
                <Image src={COOL} />
              </COOLMessage>
            );
          }
        })}
      </Chatting>
      <MessageSender
        {...{ changeInputMessage }}
        {...{ newMessage }}
        {...{ addMessage }}
      />
      <Empty />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #abc1d1;
`;
const Empty = styled.div`
  height: 100px;
`;
const Chatting = styled.div`
  display: flex;
  flex-direction: column;
`;
const EUNKOMessage = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const COOLMessage = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Image = styled.img`
  width: 60px;
  padding: 0.5rem;
  border-radius: 30px;
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
