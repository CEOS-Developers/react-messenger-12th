import React from 'react';
import styled from 'styled-components';

export default function Header({ user, profileImg, changeUser }) {
  return (
    <Wrapper>
      <Button onClick={changeUser}>
        <ProfileImg src={profileImg} alt="userProfile"/>
      </Button>
      <UserInfo>
        <UserName>{user}</UserName>
        <UserOn>현재 활동중</UserOn>
      </UserInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // 상단에 고정
  position: fixed;
  top: 0;
  width: 100%;

  height: 80px;
  background-color: white;
  opacity: 0.9;

  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  margin: 0;
  padding: 5px;
  margin-left: 15px;

  background-color: white;
  border: none;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  
  border-radius: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
`;

const UserName = styled.h2`
  margin: 0;
  margin-bottom: 5px;
`;

const UserOn = styled.div``;