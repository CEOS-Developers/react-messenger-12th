import React from 'react';
import styled from 'styled-components';
import HomeLogo from '../kakao.jpg';

export default function Friends() {
  return (
    <Wrapper>
      <img src={HomeLogo} width="150px" alt="home" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f7e600;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
