import React from 'react';
import styled from 'styled-components';

export default function Header({ changeUser, user, imgUrl }) {
  return (
    <Wrapper>
      <ChangeButton onClick={changeUser}>
        <Image src={imgUrl}></Image>
      </ChangeButton>
      <UserInfo>
        <UserName>{user}</UserName>
        <UserOn>현재 활동중</UserOn>
      </UserInfo>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  position: fixed;
  width: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const UserName = styled.div`
  font-size: 1.8rem;
`;

const UserOn = styled.div``;

const ChangeButton = styled.button`
  all: unset;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 2rem;
  margin: 10px;
`;
