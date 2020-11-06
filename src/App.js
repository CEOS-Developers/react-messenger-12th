import React, { useState } from 'react';
import styled from 'styled-components';

import ChattingScreen from './components/ChattingScreen';
import Sidebar from './components/Sidebar'
import ChattingRoomList from './components/ChattingRoomList';
import FriendList from './routes/FriendList';
import StartingPage from './components/StartingPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Router>
        <Sidebar />
        <ChattingRoomListContainer>
          <AppController />
          <Switch>
            <Route path="/friend-list" component={FriendList} />
            <Route path="/chatting-room-list" component={ChattingRoomList} />
            <Route path="/chatting-screen" component={ChattingRoomList} />
            <Route path="/friend-list/chatting-screen" component={FriendList} />
            <Route exact path="/" component={ChattingRoomList} />
          </Switch>
        </ChattingRoomListContainer>
        <ChattingScreenContainer>
          <Switch>
            <Route exact path="/friend-list" component={StartingPage} />
            <Route path="/chatting-room-list" component={StartingPage} />
            <Route path="/chatting-screen" component={ChattingScreen} />
            <Route path="/friend-list/chatting-screen" component={ChattingScreen} />
            <Route exact path="/" component={StartingPage} />
          </Switch>
        </ChattingScreenContainer>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  background: #fafafa;
`;

const AppController = styled.div`
  width: 100%;
  height: 5%;
  background: #fafafa;
`;

const ChattingRoomListContainer = styled.div`
  height: 100%;
  width: 450px;
  flex-direction: column;
`;

const ChattingScreenContainer = styled.div`
  height: 100%
  width: 50%;
`;