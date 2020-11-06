import React, { useState } from 'react';
import styled from 'styled-components';

export default function MessageSender({ addMessageToArr }) {
  const [message, setMessage] = useState('');

  const getMessageFromMessageSender = (e) => {
    e.preventDefault();
	addMessageToArr(message);
	console.log('TEST : ', e.target.childNodes[0].value);
	// document.querySelector('#chat-box').value = '';
	e.target.childNodes[0].value = '';	// 윗줄보다 이것이 더 좋을까 ?
    setMessage(''); // 메시지 한번 전송 후, 메시지state를 초기화 해야함.
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Wrapper onSubmit={getMessageFromMessageSender}>
      <ChatBox type="text" onChange={onChangeMessage} />
      <SubmitButton type="submit" value="전송" />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 70px;
  ${'' /* left: 0px; */}
  bottom: 0px;
  width: 100%;
  position: fixed;

  background-color: white;
  background: rgba(255, 255, 255, 0.8);
  color: black;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  ${'' /* justify-content: center; */}
  align-items: center;
`;

const ChatBox = styled.input`
  ${'' /* width: 1150px; */}
  width: 60%;
  height: 60%;
  padding-left: 12px;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.3);
  outline: none;

  display: flex;
  margin: 10px;
`;

const SubmitButton = styled.input`
  display: flex;
  height: 50px;
  width: 65px;
  border-radius: 35%;
  background-color: #ffe066;
  border: none;
  outline: none;

  text-align: center;
  justify-content: center;

  font-size: 15px;
`;
