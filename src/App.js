import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRoute from './components/PageRoute';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <PageRoute />
      </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  font-family: 'Noto Sans';
`;
