import React from 'react';
import styled from 'styled-components';

import MyList from './MyList';

const FriendList = ({ userInfo, onChangeMessage }) => {
  return (
    <Wrapper>
      {userInfo.map((user, index) => {
        return (
          <MyList
            key={index}
            userImage={user.image}
            userName={user.name}
            statusMessage={user.statusMessage}
            userMusic={user.music}
            onChangeMessage={onChangeMessage}
          />
        );
      })}
    </Wrapper>
  );
};

export default FriendList;

const Wrapper = styled.ul``;
