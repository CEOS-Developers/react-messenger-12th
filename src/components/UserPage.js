import React, { useState } from 'react';
import styled from 'styled-components';

import ListName from './ListName';
import FindForm from './FindForm';
import FriendList from './FriendList';
import ListFrame from './MyList';

import { userInfo, MyInfo } from './UserInfo.js';

const UserPage = ({ onChangeMessage }) => {
  const [userInformation, setUserInformation] = useState(userInfo);
  const onChangeName = (n) => {
    const list = userInfo.filter((user) => {
      return user.name.indexOf(n) == 0 ? true : false;
    });
    setUserInformation(list);
  };

  return (
    <>
      <ListName name={'친구'} />
      <FindForm holder={'이름 검색'} onChangeName={onChangeName} />
      <ListFrame
        style={{ marginBottom: '5px' }}
        userName={MyInfo.name}
        userImage={MyInfo.image}
        statusMessage={MyInfo.statusMessage}
        userMusic={MyInfo.music}
        onChangeMessage={onChangeMessage}
      />
      <DivisionLineBox>
        <DivisionLine />
      </DivisionLineBox>
      <FriendListName>친구 {userInfo.length}</FriendListName>
      <FriendList
        userInfo={userInformation}
        onChangeMessage={onChangeMessage}
      />
    </>
  );
};

export default UserPage;

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
