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
      <Link to="chatting-screen">
        <ChattingInfo>
          <ChatterName>{nameArr[userNum]}</ChatterName>
          <ChattingPreview>{chattingPreviewArr[0]}</ChattingPreview>
        </ChattingInfo>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 10%;
  width: 100%;
  background: #ce93d8;

  display: flex;
`;

const ChatterProfile = styled.img`
  height: 80%;
  width: 14%;
  border-radius: 50%;
  align-self: center;
`;

const ChattingInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatterName = styled.div``;

const ChattingPreview = styled.div``;
