import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import chattingRoomArr from './arrayMessage.json';

export default function ChattingRoom({ profile, name, preview, userNum }) {

  return (
    <Wrapper>
      <ChatterProfile src={profile} />
      <ChattingLink to="chatting-screen">
        <ChattingInfo>
          <ChatterName>{name}</ChatterName>
          <ChattingPreview>{preview}</ChattingPreview>
        </ChattingInfo>
      </ChattingLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 10px;
  background: #fafafa;

  display: flex;
`;

const ChatterProfile = styled.img`
  height: 80%;
  width: 50px;
  margin: 0 10px 0 15px;
  border-radius: 50%;
  align-self: center;
`;

const ChattingInfo = styled.div`
  height: 80%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const ChatterName = styled.div`
  margin-top: 10px;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;

const ChattingPreview = styled.div`
  font-size: 12px;
  color: #a4a4a4;
`;

const ChattingLink = styled(Link)`
  text-decoration: none;
`