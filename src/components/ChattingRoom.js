import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function ChattingRoom({ userNum }) {
  const eunProfile = 'https://img.techpowerup.org/200908/eun.png';
  const nameArr = ['고은', '문상빈', '문상진', '유빈', '이재용',
   '정쿨', '지노', '황유나', '유현우', '장창훈'];
  const chattingPreviewArr = ['안녕하세요'];

  return (
    <Wrapper>
      <ChatterProfile src={eunProfile} />
      <ChattingLink to="chatting-screen">
        <ChattingInfo>
          <ChatterName>{nameArr[userNum]}</ChatterName>
          <ChattingPreview>{chattingPreviewArr[0]}</ChattingPreview>
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