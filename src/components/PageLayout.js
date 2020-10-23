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
          <Route exact path="/" component={UserPage} />
          <Route path="/chat">
            <ChatPage onChangeMessage={onChangeMessage} />
          </Route>
          <Route path="/more" component={MorePage} />
          {/* <Route path="/chatMessage">
            <ChattingScreen WHO_MESSAGE={message} />
          </Route> */}
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
  padding-top: 30px;
`;

export default PageLayout;
