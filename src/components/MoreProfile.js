import React from 'react';
import styled from 'styled-components';

const MoreProfile = ({ userImage, userName, statusMessage }) => {
  return (
    <Wrapper>
      <ProfilePicture>
        <ProfileImage src={userImage} />
      </ProfilePicture>
      <UserInfomationFrame>
        <UserName>{userName}</UserName>
        <UserStatusMessage>{statusMessage}</UserStatusMessage>
      </UserInfomationFrame>
    </Wrapper>
  );
};

export default MoreProfile;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 20px;
  height: 55px;
`;

const ProfilePicture = styled.div`
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
`;

const UserInfomationFrame = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
  margin: 10px 0px 0px 16px;
  font-size: 12.5px;
  font-weight: 400;
`;

const UserName = styled.div``;

const UserStatusMessage = styled.div`
  margin-bottom: 10px;
  font-weight: 100;
  color: #8e8d8d;
`;
