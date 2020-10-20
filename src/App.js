import React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PageLayout from './components/PageLayout';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <PageLayout />
      </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  font-family: 'Noto Sans';
`;
