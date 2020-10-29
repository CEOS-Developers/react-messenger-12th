import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRouter from '../src/components/PageRouter';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <PageRouter />
      </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  font-family: 'Noto Sans';
`;
