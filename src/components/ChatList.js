import React from 'react';
import styled from 'styled-components';

const ChatList = ({ userImage, userName, lastMessage, lastMessageTime }) => {
  const onDoubleClick = () => {};
  return (
    <Wrapper onDoubleClick={onDoubleClick}>
      <ProfilePicture>
        <ProfileImage src={userImage} />
      </ProfilePicture>
      <UserInfomationFrame>
        <UserName>{userName}</UserName>
        <UserStatusMessage>{lastMessage}</UserStatusMessage>
      </UserInfomationFrame>
      <LastTime>{lastMessageTime}</LastTime>
    </Wrapper>
  );
};

export default ChatList;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 20px;
  height: 52px;
  &:hover {
    background-color: #f7f6f6;
  }
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
  margin-left: 12px;
  font-size: 12.5px;
  font-weight: 600;
`;

const UserName = styled.div``;

const UserStatusMessage = styled.div`
  margin-bottom: 5px;
  font-weight: 100;
  color: #8e8d8d;
`;

const LastTime = styled.div`
  padding-right: 20px;
  width: 30px;
  font-size: 10px;
  font-weight: 600;
  text-align: right;
`;
