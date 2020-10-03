import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import SearchBar from '../components/SearchBar';
import Label from '../components/Label';
import List from '../components/List';

// Data
import CHAT_L_DATA from '../resources/ChatL.json';

// Library
import filter from '../library/filter';

export default function ChatList(props) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(CHAT_L_DATA.data);
  const getText = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    setFilteredData(filter(search, CHAT_L_DATA.data));
  }, [search]);
  return (
    <Wrapper>
      <Fixed>
        <HStack>
          <Label label="채팅" />
          <Label label="채팅방이미지" />
        </HStack>
        <SearchBar sendText={getText} placeholderName="채팅방 이름, 참여자 검색" />
      </Fixed>
      <List data={filteredData} from="CHAT" route={props}></List>
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
