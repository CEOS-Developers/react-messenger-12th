import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import SearchBar from '../components/SearchBar';
import Label from '../components/Label';
import List from '../components/List';

// Data
import FRIEND_L_DATA from '../resources/FriendL.json';

// Library
import filter from '../library/filter';

export default function ChatList(props) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(FRIEND_L_DATA.data);
  const getText = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    setFilteredData(filter(search, FRIEND_L_DATA.data));
  }, [search]);
  return (
    <Wrapper>
      <Fixed>
        <HStack>
          <Empty>
            <Label label="친구" />
            <FriendCount>{`${filteredData.length}`}</FriendCount>
          </Empty>
          <Label label="친구이미지" />
        </HStack>
        <SearchBar sendText={getText} placeholderName="이름으로 검색" />
      </Fixed>
      <List data={filteredData} from="FRIEND" route={props}></List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // width: 100%;
  height: 100%;

  margin-left: 70px;

  display: flex;
  flex-direction: column;
`;

const FriendCount = styled.span`
  margin-left: 5px;

  color: gray;
  font-size: 18px;
`;

const Empty = styled.div`
  display: flex;
  align-items: flex-end;
`;

const HStack = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: space-between;
`;

const Fixed = styled.div`
  position: fixed;
  left: 70px;
  right: 16px;

  padding-left: 16px;
  padding-top: 16px;
  background-color: white;
`;
