import React from 'react';
import styled from 'styled-components';
import MainPage from './components/MainPage';

export default function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
`;
