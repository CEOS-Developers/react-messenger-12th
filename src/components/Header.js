import React, { useState } from 'react';
import styled from 'styled-components';

const Header = ({ userImage, toggleUser, userName }) => {
  const [now] = useState('현재 활동중');

  // status 상태에 따라 프로필 사진이 바뀜
  return (
    <Wrapper>
      <UserProfile onClick={toggleUser}>
        <UserImage src={userImage}></UserImage>
      </UserProfile>
      <UserInformation>
        <UserName>{userName}</UserName>
        <div>{now}</div>
      </UserInformation>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  height: 80px;

  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0px;
`;

const UserProfile = styled.button`
  margin: 3px 0px 0px 16px;
  width: 70px;
  height: 70px;
`;

const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 20px;
`;

// 버튼 크기에 맞게 조절할 수 있으면 좋을듯

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 13px;
  padding-left: 16px;
`;

const UserName = styled.div`
  font-size: 25px;
`;
