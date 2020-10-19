import React from 'react';
import styled from 'styled-components';

import FriendList from './FriendList';
import MyList from './MyList';

import { userInfo, MyInfo } from './UserInfo.js';

const UserPage = () => {
  return (
    <>
      <FriendNameForm>
        <InputFriendName placeholder="🔎이름 검색" />
      </FriendNameForm>
      <MyList
        style={{ marginBottom: '5px' }}
        userName={MyInfo.name}
        userImage={MyInfo.image}
        statusMessage={MyInfo.statusMessage}
      />
      <DivisionLineBox>
        <DivisionLine />
      </DivisionLineBox>
      <FriendListName>친구 {userInfo.length}</FriendListName>
      <FriendList />
    </>
  );
};

export default UserPage;

const FriendNameForm = styled.form`
  display: flex;
  padding: 12px;
  padding-left: 20px;
`;

const InputFriendName = styled.input`
  flex: 1 1 10px;
  padding: 8px;
  height: 12px;
  border: 1px solid #f0efef;
  border-radius: 12.5px;
  font-size: 12.5px;
  background-color: #f5f5f5;
`;

const DivisionLineBox = styled.div`
  display: flex;
`;

const DivisionLine = styled.div`
  margin: 5px 20px 0px 20px;
  flex: 1 1 10px;
  border-bottom: 1px solid #f1f1f1;
`;

const FriendListName = styled.div`
  padding: 10px 0px 10px 20px;
  font-size: 11px;
  color: #8e8d8d;
`;
