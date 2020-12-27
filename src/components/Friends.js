import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
export default function Friends() {
  const whichState = true;
  return (
    <Wrapper>
      <FriendsRow>
        <FriendsNumber>친구</FriendsNumber>
        <PersonAddIcon fontSize="large" style={{ marginRight: '20px' }} />
      </FriendsRow>
      <Profile {...{ whichState }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;
const FriendsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const FriendsNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 5px;
`;
