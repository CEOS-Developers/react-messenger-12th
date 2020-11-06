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
import { Link } from "react-router-dom";
function Chat() {
  const FRIENDLIST = [
    {
      user: "vanellope",
      name: "바넬로피",
      content: "안녕 난 바넬로피야!",
    },
    {
      user: "miso",
      name: "미소",
      content: "오늘 학식 뭐야",
    },
    {
      user: "jian",
      name: "지안",
      content: "아니 언제오는거야 대체",
    },
  ];

  let filteredChatList = [];

  const [inputText, setInputText] = useState("");
  const [newChatList, setNewChatList] = useState(FRIENDLIST);

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
        return (
          <FriendRow key={index} sending={!friend.user}>
            <Img src={require(`./images/${friend.user}.jpg`)} />
            <FriendContainer>
              <Link to="/chatting">
                <div>{friend.name}</div>
                <MessagePreview>{friend.content}</MessagePreview>
              </Link>
            </FriendContainer>
          </FriendRow>
        );
      })}
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
