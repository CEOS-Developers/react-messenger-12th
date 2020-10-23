import React from 'react';
import styled from 'styled-components';

import MyList from './MyList';

const FriendList = ({ userInfo }) => {
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
          />
        );
      })}
    </Wrapper>
  );
};

export default FriendList;

const Wrapper = styled.ul``;
