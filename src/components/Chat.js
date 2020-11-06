import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { FriendContainer, FriendRow, Img } from "./styles/elements";
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

  return (
    <div>
      <h2>채팅</h2>
      {FRIENDLIST.map((friend, index) => {
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
    </div>
  );
}

const MessagePreview = styled.div`
  font-size: 5px;
  color: rgba(0, 0, 0, 0.7);
`;

export default withRouter(Chat);
