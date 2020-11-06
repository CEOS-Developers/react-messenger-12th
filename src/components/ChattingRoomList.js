import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingRoom from './ChattingRoom';
import chattingRoomArr from './arrayMessage.json';

export default function ChattingRoomList() {
  const [searchKey, setSearchKey] = useState('');
  let profileArr = [];
  let nameArr = [];
  let previewArr = [];

  for(let key in chattingRoomArr.chatPreviewArr) {
    profileArr.push(chattingRoomArr.chatPreviewArr[key].profile);
    nameArr.push(chattingRoomArr.chatPreviewArr[key].name);
    previewArr.push(chattingRoomArr.chatPreviewArr[key].chattingPreview);
  }

  const onChangeSearchBar = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <Wrapper>
      <SearchBar type="text" placeholder="   대화방, 메시지 검색" onChange={onChangeSearchBar} />
      <ChattingRoomBox>
        {nameArr.map((name, index) => {
          if (name.indexOf(searchKey) > -1) {
            return <ChattingRoom profile={profileArr[index]} 
              name={nameArr[index]} preview={previewArr[index]} />;
          } else return null;
        })}
      </ChattingRoomBox>
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

const ChattingRoomBox = styled.div`
  overflow: auto;
`;
