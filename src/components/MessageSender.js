import React, { useState } from "react";
import styled from "styled-components";

export default function MessageSender(props) {
  const array = Object.values(props);
  const [messages, setmessages] = useState(array);

  const messageList = array.map((message) => (
    <MessageRow>
      <img src="https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png" />
      <MessageContent>{message.content}</MessageContent>
    </MessageRow>
  ));

  return <>{messageList}</>;
}
const Wrapper = styled.div``;

const MessageRow = styled.li`
  list-style: none;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
  }
`;
const MessageContent = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  list-style: none;

  height: 60px;
  display: flex;
  background-color: white;
  width: fit-content;
  height: 50px;
  align-items: center;
  margin: 10px;
`;
