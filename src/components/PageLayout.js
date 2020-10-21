import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import UserPage from './UserPage';
import ChatPage from './ChatPage';
import MorePage from './MorePage';
import ChattingScreen from './ChattingScreen';

import MenuBar from './MenuBar';

const PageLayout = () => {
  const [listName, setListName] = useState('친구');
  const [isMenuBar, setIsMenuBar] = useState(true);

  const handleListName = (name) => {
    setListName(name);
  };
  const handleisMenuBar = () => {
    setIsMenuBar(!isMenuBar);
  };
  return (
    <Wrapper>
      {isMenuBar ? <MenuBar handleisMenuBar={handleisMenuBar} /> : <></>}
      <AllList>
        {/* <Switch> */}
        <Route exact path="/" component={UserPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/more" component={MorePage} />
        <Route path="/chatMessage" component={ChattingScreen} />
      </AllList>
      {/* </Switch> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  -webkit-user-select: none;
`;

const AllList = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export default PageLayout;
