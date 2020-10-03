import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { FriendList, ChatList, Setting, Home } from '../pages';
import SideBarMenu from '../components/SideBarMenu';
import ChattingScreen from '../pages/ChattingScreen';

export default function App() {
  return (
    <Wrapper>
      <SideBarMenu />
      <Switch>
        <Route path="/friend/:index" component={ChattingScreen} />
        <Route path="/friend" component={FriendList} />
        <Route exact path="/chat/:index" component={ChattingScreen} />
        <Route exact path="/chat" component={ChatList} />
        <Route path="/setting" component={Setting} />
        <Route path="/" component={Home} />
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;

  & * {
    font-family: sans-serif;
  }
`;
