import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import groupArr from '../arrayMessage.json';

export default function ChattingRoom({ userNum }) {
    const groupProfileArr = groupArr.groupChatProfile;
    const groupNameArr =  groupArr.groupNameArr;
  
    return (
      <Wrapper>
        <ChatterProfile src={groupProfileArr[userNum]} />
        <ChattingLink to="/friend-list/chatting-screen">
            <ChatterName>{groupNameArr[userNum]}</ChatterName>
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
  
  const ChatterName = styled.div`
    margin-top: 22px;
    font-size: 13px;
    font-weight: bold;
    color: black;
  `;
  
  const ChattingLink = styled(Link)`
    text-decoration: none;
  `