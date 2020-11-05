import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingRoom from './ChattingRoom';

export default function ChattingRoomList() {
  return (
    <Wrapper>
      <ChattingRoom userNum={0}/>
      <ChattingRoom userNum={1}/>
      <ChattingRoom userNum={2}/>
      <ChattingRoom userNum={3}/>
      <ChattingRoom userNum={4}/>
      <ChattingRoom userNum={5}/>
      <ChattingRoom userNum={6}/>
      <ChattingRoom userNum={7}/>
      <ChattingRoom userNum={8}/>
      <ChattingRoom userNum={9}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: grey;
`;

// const ChattingRoom = styled.div`
//     height: 10%;
//     width: 100%;
//     background: #ce93d8;
// `