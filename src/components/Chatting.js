import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import AddIcon from '@material-ui/icons/Add';
export default function Chatting() {
  const whichState = false;
  return (
    <Wrapper>
      <FriendsRow>
        <FriendsNumber>채팅</FriendsNumber>
        <AddIcon fontSize="large" style={{ marginRight: '20px' }} />
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
