import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { images } from "./images/image";
import MessageSender from "./MessageSender";
import { withRouter } from "react-router-dom";
const ChattingScreen = () => {
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
  const [inputText, setInputText] = useState("");
  const [messageList, setMessageList] = useState(MSGLIST);
  const [user, setUser] = useState(true);

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [messageList]);

  const handleInput = (event) => {
    event.preventDefault();

    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    //prevent refresh right after submit
    event.preventDefault();

    //handle exception when user typed nothing
    if (inputText === "") {
      alert("내용을 입력하세요");
      return;
    }
    //concat to previous messageList
    const nextMessageList = messageList.concat({
      user: user,
      content: inputText,
    });
    //update messageList
    setMessageList(nextMessageList);
    setInputText("");
  };

  return (
    <Wrapper>
      {/* child component updates state in parent component   */}
      {/* <Header user={user} onClick={() => setUser(!user)}></Header> */}

      {/* <Header
        user={user ? "고은" : "정쿨"}
        onClick={() => setUser(!user)}
        imgUrl={user ? images.EUNKO : images.COOL}
      ></Header> */}
      <Chat>
        {/* give <li> structure to each message */}
        {messageList.map((message, index) => {
          return (
            <MessageRow key={index} sending={!message.user}>
              <Img src={message.user ? images.EUNKO : images.COOL} />
              <Message>{message.content}</Message>
            </MessageRow>
          );
        })}
        {/* <MessageSender {...messageList}></MessageSender> */}
      </Chat>
      <Empty />
      <MessageSender
        {...{ inputText }}
        {...{ handleInput }}
        {...{ handleSubmit }}
      ></MessageSender>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #abc1d1;
`;
const Empty = styled.div`
  height: 110px;
`;

const Chat = styled.div`
  /* background-color: #abc1d1; */
  padding-top: 120px;
  /* padding-bottom: 200px; */
`;

const MessageRow = styled.li`
  list-style: none;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  flex-direction: ${(props) => (props.sending ? "row-reverse" : "row")};
`;

const Message = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  list-style: none;

  display: flex;
  background-color: white;

  height: 50px;
  align-items: center;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

export default withRouter(ChattingScreen);
