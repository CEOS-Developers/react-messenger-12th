import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FriendContainer, FriendRow, Img } from "./styles/elements";

const Friends = () => {
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

  return (
    <div>
      <h2>친구</h2>
      <InputBox>
        <Input placeholder="친구 검색" />
      </InputBox>
      {FRIENDLIST.map((friend, index) => {
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
    </div>
  );
};

const InputBox = styled.form``;
const Input = styled.input`
  height: 50px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const StatusMessage = styled.div`
  font-size: 5px;
  color: rgba(0, 0, 0, 0.7);
`;

export default withRouter(Friends);
