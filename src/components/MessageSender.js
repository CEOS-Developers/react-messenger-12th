import React, { useState } from 'react';
import styled from 'styled-components';

export default function MessageSender({ addToList }) {
  const [message, setMessage] = useState('');

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitMessage = (event) => {
    event.preventDefault();

    // 입력이 없을 때 예외 처리
    !message && alert('메세지를 입력해주세요!');
    message && addToList(message);

    // textField 비우기
    setMessage('');
  };

  return (
    <Wrapper onSubmit={handleSubmitMessage}>
      <InputMessage name="message" value={message} onChange={handleChangeMessage} />
      <Button type="submit">전송</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 70px;

  // 하단에 고정
  position: fixed;
  left: 70px;
  bottom: 0;
  right: 0;

  border-radius: 5px;
  color: white;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputMessage = styled.input`
  height: 1rem;
  width: 94%;

  margin: 6px;
  padding: 10px 6px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;

  text-align: left;
  // font-size: 12px;

  outline: none;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;

  margin: 0 6px;
  color: black;
  background-color: rgb(255, 224, 102);

  border: 1px solid yellow;
  border-radius: 20px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  font-size: 14px;
`;
