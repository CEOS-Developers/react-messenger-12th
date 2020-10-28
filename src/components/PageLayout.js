import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import UserPage from './UserPage';
import ChatPage from './ChatPage';
import MorePage from './MorePage';
import MenuBar from './MenuBar';

const PageLayout = ({ onChangeMessage }) => {
  return (
    <Wrapper>
      <MenuBar />
      <AllList>
        <Switch>
          <Route exact path="/">
            <UserPage onChangeMessage={onChangeMessage} />
          </Route>
          <Route path="/chat">
            <ChatPage onChangeMessage={onChangeMessage} />
          </Route>
          <Route path="/more" component={MorePage} />
        </Switch>
      </AllList>
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
  margin-left: 50px;
  padding-top: 30px;
`;

export default PageLayout;
