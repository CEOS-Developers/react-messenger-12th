import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingRoom from './ChattingRoom';

export default function ChattingRoomList() {
  const [searchKey, setSearchKey] = useState('');
  const nameArr = [
    '고은',
    '문상빈',
    '문상진',
    '유빈',
    '이재용',
    '정쿨',
    '지노',
    '황유나',
    '유현우',
    '장창훈',
  ];

  const onChangeSearchBar = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <Wrapper>
      <SearchBar type="text" placeholder="대화방, 메시지 검색" onChange={onChangeSearchBar} />
      <ChattingRoomBox>
        {nameArr.map((name, index) => {
          if (name.indexOf(searchKey) > -1) {
            return <ChattingRoom userNum={index} />;
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
