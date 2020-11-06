import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  FriendContainer,
  FriendRow,
  Img,
  Input,
  InputBox,
} from "./styles/elements";
import { Link, Route } from "react-router-dom";
import { friendList } from "./data";
import ChattingScreen from "./ChattingScreen";
function Chat() {
  let path;
  let filteredChatList = [];

  const [inputText, setInputText] = useState("");
  const [newChatList, setNewChatList] = useState(friendList);

  const handleInput = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  filteredChatList = newChatList.filter((friend) =>
    friend.name.includes(inputText)
  );

  return (
    <Wrapper>
      <h2>채팅</h2>
      <InputBox>
        <Input
          placeholder="채팅 검색"
          value={inputText}
          onChange={handleInput}
        />
      </InputBox>
      {filteredChatList.map((friend, index) => {
        path = `/chatting/${index}`;
        return (
          <FriendRow key={index} sending={!friend.user}>
            <Img src={require(`./images/${friend.user}.jpg`)} />
            <FriendContainer>
              <Link to={path}>
                <div>{friend.name}</div>
                <MessagePreview>{friend.content}</MessagePreview>
              </Link>
            </FriendContainer>
          </FriendRow>
        );
      })}

      <Route path="/chatting/:userIndex" component={ChattingScreen} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-left: 10px;
`;
const MessagePreview = styled.div`
  font-size: 5px;
  color: rgba(0, 0, 0, 0.7);
`;

export default withRouter(Chat);
