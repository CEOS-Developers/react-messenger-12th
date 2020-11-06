import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MessageSender from "./MessageSender";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import { friendList } from "./data";
const ChattingScreen = ({ match }) => {
  //get user information using URL parameter
  const { userIndex } = match.params;

  let MSGLIST = friendList[userIndex].messageList;
  const FRIENDLIST = friendList;
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

      <Header
        user={user ? FRIENDLIST[userIndex].name : "sangbeen"}
        onClick={() => setUser(!user)}
        imgUrl={
          user
            ? require(`./images/${FRIENDLIST[userIndex].user}.jpg`)
            : require(`./images/sangbeen.jpg`)
        }
      ></Header>
      <Chat>
        {/* give <li> structure to each message */}
        {messageList.map((message, index) => {
          return (
            <MessageRow key={index} sending={!message.user}>
              <Img
                src={
                  message.user
                    ? require(`./images/${FRIENDLIST[userIndex].user}.jpg`)
                    : require(`./images/sangbeen.jpg`)
                }
              />
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
  padding-top: 120px;
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
