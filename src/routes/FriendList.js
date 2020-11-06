import React, { useState } from 'react';
import styled from 'styled-components';
import Friend from '../components/Friend';
import groupNameArr from '../components/arrayMessage.json';
import ChattingRoom from '../components/ChattingRoom';

export default function FriendList() {
    const [searchKey, setSearchKey] = useState('');
    const groupChatNameArr = groupNameArr.groupNameArr;
    const myInfo = groupNameArr.me;

  const onChangeSearchBar = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <Wrapper>
      <SearchBar type="text" placeholder="   이름으로 검색" onChange={onChangeSearchBar} />
      <FriendBox>
        {/* <Friend userNum={9} /> */}
        <ChattingRoom profile={myInfo.profile} 
          name={myInfo.name} preview={myInfo.chatPreview}/>
        <ListCount>그룹 10</ListCount>
        {groupChatNameArr.map((name, index) => {
          if (name.indexOf(searchKey) > -1) {
            return <Friend userNum={index} />;
          } else return null;
        })}
        <ListCount>친구 187</ListCount>
        {groupChatNameArr.map((name, index) => {
          if (name.indexOf(searchKey) > -1) {
            return <Friend userNum={index} />;
          } else return null;
        })}
      </FriendBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 95%;
  width: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.input`
  height: 50px;
  width: 90%;

  margin: 0px 0px 3px 15px;
  border: none;
  border-radius: 5px 5px 5px 5px;
  background: #eeeeee;
`;

const FriendBox = styled.div`
  overflow: auto;
`;

const ListCount = styled.div`
  height: 10px;
  width: 100%;
  margin: 20px 0px 0px 15px;
  background: #fafafa;
  font-size: 12px;
  color: #a4a4a4;
`;