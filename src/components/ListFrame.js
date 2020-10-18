import React from 'react';
import styled from 'styled-components';

import JINOIMAGE from '../images/JINOIMAGE.jpg';

const ListFrame = () => {
  return (
    <Wrapper>
      <ProfilePicture>
        <ProfileImage src={JINOIMAGE} />
      </ProfilePicture>
      <UserName>
        지노
        <UserStatusMessage>hello react</UserStatusMessage>
      </UserName>
    </Wrapper>
  );
};

export default ListFrame;

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 20px;
  height: 55px;
  &:hover {
    background-color: #f7f6f6;
  }
`;

const ProfilePicture = styled.div`
  width: 53px;
  height: 55px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
`;

const UserName = styled.div`
  margin: 7.5px 0px 0px 12px;
  font-size: 12.5px;
  font-weight: 600;
`;

const UserStatusMessage = styled.div`
  margin-top: 5px;
  font-weight: 100;
  color: #8e8d8d;
`;
