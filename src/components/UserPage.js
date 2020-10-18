import React from 'react';
import styled from 'styled-components';
import MyList from './ListFrame';
import MenuBar from './MenuBar';

const UserPage = () => {
  return (
    <Wrapper>
      <MenuBar />
      <AllList>
        <ListName>친구</ListName>
        <FriendNameForm>
          <InputFriendName placeholder="🔎이름 검색" />
        </FriendNameForm>
        <MyList style={{ marginBottom: '5px' }} />
        <DivisionLineBox>
          <DivisionLine />
        </DivisionLineBox>
        <FriendListName>친구 436</FriendListName>
        <FriendList>
          <MyList />
        </FriendList>
      </AllList>
    </Wrapper>
  );
};

export default UserPage;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  -webkit-user-select: none;
`;

const AllList = styled.div`
  width: 100%;
  padding-top: 30px;
`;

const ListName = styled.div`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;

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
const FriendList = styled.ul``;
