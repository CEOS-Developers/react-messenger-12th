import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageLayout from './PageLayout';
import { MESSAGE_LIST } from './ChatMessageInfo';
import Message from './Message';

const PageRoute = () => {
  const [message, setMessage] = useState(MESSAGE_LIST[0]);
  const onChangeMessage = (name) => {
    let list = MESSAGE_LIST.filter((m) => m[0].opponentName === name);
    setMessage(list[0]);
    // filter을 쓰면 [ [] ] 조건에 일치하지 않는 것만 제외 고로 index 0 을 해줌
  };
  return (
    <Switch>
      <Route exact path="/message/:id">
        <Message WHO_MESSAGE={message} />
      </Route>
      <Route path="/">
        <PageLayout onChangeMessage={onChangeMessage} />
      </Route>
    </Switch>
  );
};

export default PageRoute;
