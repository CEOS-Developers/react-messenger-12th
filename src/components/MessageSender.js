import React from "react";
import styled from "styled-components";

export default function MessageSender({
  changeInputMessage,
  addMessage,
  newMessage,
}) {
  return (
    <Wrapper>
      <Input
        type="text"
        name="content"
        placeholder="할 말을 입력하세요"
        onChange={changeInputMessage}
        value={newMessage.content}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addMessage(e);
          }
        }}
      ></Input>
      <Button onClick={addMessage}>전송</Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;
const Input = styled.input`
  border-radius: 25px;
  width: 100%;
  height: 1rem;
  padding: 1rem;
  margin: 1rem;
  border-color: black;
  outline: none;
`;
const Button = styled.button`
  background-color: #feeb75;
  width: 5rem;
  height: 3.3rem;
  border-radius: 20px;
  margin-right: 1rem;
  border-color: black;
  outline: none;
  font-weight: bold;
`;
