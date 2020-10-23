import React from 'react';
import { Route } from 'react-router-dom';
import ChattingScreen from './ChattingScreen';

const Message = ({ WHO_MESSAGE }) => {
  return (
    <>
      <Route path="/:id">
        <ChattingScreen WHO_MESSAGE={WHO_MESSAGE} />
      </Route>
    </>
  );
};

export default Message;
