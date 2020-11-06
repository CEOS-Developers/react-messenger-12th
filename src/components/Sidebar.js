import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Wrapper>
      <Route>
        <LinkIcon to="/friend-list">
          <i class="fas fa-user"></i>
        </LinkIcon>
        <LinkIcon to="/chatting-room-list">
          <i class="fas fa-comment-dots"></i>
        </LinkIcon>
        <LinkIcon to="/friend-list">
          <i class="fas fa-user-plus"></i>
        </LinkIcon>
        <LinkIcon to="/friend-list">
          <i class="fad fa-clock"></i>
        </LinkIcon>
        <ServeIcon className="serve-icon">
          <i class="far fa-video-plus"></i>
          <i class="far fa-square"></i>
          <i class="far fa-bookmark"></i>
          <i class="far fa-volume-down"></i>
          <i class="fas fa-ellipsis-h"></i>
        </ServeIcon>
      </Route>
    </Wrapper>
  );
}

const Wrapper = styled.div`
   width: 90px;
   height: 100%;
   background: #002171;

   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ServeIcon = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const LinkIcon = styled(Link)`
  margin: 35px 0 0 0;
`;