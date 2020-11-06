import React, { useState } from 'react';
import styled from 'styled-components';

export default function FriendList() {
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
      <SearchBar type="text" placeholder="이름으로 검색" onChange={onChangeSearchBar} />
      <FriendBox>
        {nameArr.map((name, index) => {
          if (name.indexOf(searchKey) > -1) {
            return <ChattingRoom userNum={index} />;
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

  margin: 0px 0px 10px 15px;
  border: none;
  border-radius: 5px 5px 5px 5px;
  background: #eeeeee;
`;

const FriendBox = styled.div`
  overflow: auto;
`;