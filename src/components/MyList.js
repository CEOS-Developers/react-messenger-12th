import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListFrame = ({
  userImage,
  userName,
  statusMessage,
  userMusic,
  onChangeMessage,
}) => {
  const onClick = () => {
    onChangeMessage(userName);
  };

  return (
    <Link
      style={{ textDecoration: 'none', cursor: 'default' }}
      to={`/message/${userName}`}
      onClick={onClick}
    >
      <Wrapper>
        <ProfilePicture>
          <ProfileImage src={userImage} />
        </ProfilePicture>
        <UserInfomationFrame>
          <UserName>{userName}</UserName>
          <UserStatusMessage>{statusMessage}</UserStatusMessage>
        </UserInfomationFrame>
        {userMusic ? (
          <UserMusic>
            <MusicName>{userMusic}</MusicName>
          </UserMusic>
        ) : (
          <></>
        )}
      </Wrapper>
    </Link>
  );
};

export default ListFrame;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 20px;
  height: 55px;
  color: black;
  &:hover {
    background-color: #f7f6f6;
  }
`;

const ProfilePicture = styled.div`
  flex: 0 0 53px;
  width: 53px;
  height: 53px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
`;

const UserInfomationFrame = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1 1 100%;
  flex-direction: column;
  margin-left: 12px;
  font-size: 12.5px;
  font-weight: 600;
`;

const UserName = styled.div``;

const UserStatusMessage = styled.div`
  margin-bottom: 10px;
  font-weight: 100;
  color: #8e8d8d;
`;

const UserMusic = styled.div`
  display: flex;
  flex: 0 0.3 200px;
  flex-direction: row-reverse;
  padding-top: 20px;
  padding-right: 20px;
  color: #515050;
  font-size: 10px;
  font-weight: 400;
`;

const MusicName = styled.div`
  border: 1.8px solid #75e674;
  height: 14px;
  padding: 2px 6px 2px 6px;
  border-radius: 10px;
`;
