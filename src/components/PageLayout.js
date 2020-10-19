import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import UserPage from './UserPage';
import ChatPage from './ChatPage';
import MorePage from './MorePage';

import MenuBar from './MenuBar';

const PageLayout = () => {
  const [listName, setListName] = useState('친구');

  const handleListName = (name) => {
    console.log(name);
    setListName(name);
  };

  return (
    <Wrapper>
      <Router>
        <MenuBar handleListName={handleListName} />
        <AllList>
          <ListName>{listName}</ListName>
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/more" component={MorePage} />
          </Switch>
        </AllList>
      </Router>
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

const ListName = styled.div`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export default PageLayout;
