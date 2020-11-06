import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {
  FriendContainer,
  FriendRow,
  Img,
  Input,
  InputBox,
} from "./styles/elements";
import { friendList } from "./data";
const Friends = () => {
  let filteredFriendList = [];

  const [inputText, setInputText] = useState("");
  const [newFriendList, setNewFriendList] = useState(friendList);

  const handleInput = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  filteredFriendList = newFriendList.filter((friend) =>
    friend.name.includes(inputText)
  );
  //왜 useEffect를 안 써도 되는걸까..
  //왜 filteredFriendList를 state로 만들어주지 않아도 되는걸까...
  return (
    <Wrapper>
      <h2>친구</h2>
      <InputBox>
        <Input
          placeholder="친구 검색"
          value={inputText}
          onChange={handleInput}
        />
      </InputBox>
      <FriendRow border>
        <Img src={require("./images/sangbeen.jpg")} />
        <FriendContainer>
          <div>상빈</div>
          <StatusMessage>안녕!!!</StatusMessage>
        </FriendContainer>
      </FriendRow>

      {filteredFriendList.map((friend, index) => {
        return (
          <FriendRow key={index} sending={!friend.user}>
            <Img src={require(`./images/${friend.user}.jpg`)} />
            <FriendContainer>
              <div>{friend.name}</div>
              <StatusMessage>{friend.content}</StatusMessage>
            </FriendContainer>
          </FriendRow>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 10px;
`;

const StatusMessage = styled.div`
  font-size: 5px;
  color: rgba(0, 0, 0, 0.7);
`;

export default withRouter(Friends);
