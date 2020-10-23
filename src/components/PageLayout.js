import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import UserPage from './UserPage';
import ChatPage from './ChatPage';
import MorePage from './MorePage';
import ChattingScreen from './ChattingScreen';
import MenuBar from './MenuBar';

import { MESSAGE_LIST } from './ChatMessageInfo';

const PageLayout = () => {
  const [isMenuBar, setIsMenuBar] = useState(true);
  const [message, setMessage] = useState(MESSAGE_LIST[0]);
  const [userName, setUserName] = useState('고애신');

  const onChangeUserName = (name) => {
    setUserName(name);
  };

  const onChangeMessage = (name) => {
    for (let i = 0; i < MESSAGE_LIST.length; i++) {
      if (MESSAGE_LIST[i][0].opponentName === name) {
        setMessage(MESSAGE_LIST[i]);
      }
    }
  };

  useEffect(() => {}, [isMenuBar, userName, message]);

  const handleisMenuBar = () => {
    setIsMenuBar(!isMenuBar);
  };

  return (
    <Wrapper>
      {isMenuBar ? <MenuBar /> : <></>}
      <AllList>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route path="/chat">
            <ChatPage
              handleisMenuBar={handleisMenuBar}
              onChangeUserName={onChangeUserName}
              onChangeMessage={onChangeMessage}
            />
          </Route>
          <Route path="/more" component={MorePage} />
          <Route path="/chatMessage">
            <ChattingScreen WHO_MESSAGE={message} />
          </Route>
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
