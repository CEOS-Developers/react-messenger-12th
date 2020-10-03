import React from 'react';
import styled from 'styled-components';

export default function MessageLine({ user, profileImg, message }) {
  return (
    <Message sending={!user}>
      <Img src={profileImg} alt="user" />
      <ChatStyle>{message}</ChatStyle>
    </Message>
  );
}

const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 25px;

  margin: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Message = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.sending ? 'row-reverse' : 'row')};
  align-items: center;

  background-color: #abc1d1;
`;

const ChatStyle = styled.div`
  height: 25px;

  background-color: white;

  display: flex;
  align-items: center;

  padding: 10px;

  border: none;
  border-radius: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
