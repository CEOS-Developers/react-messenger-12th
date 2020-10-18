import React from 'react';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import ChattingScreen from './components/ChattingScreen';
import UserPage from './components/UserPage';

const App = () => {
  return (
    <Wrapper>
      <UserPage />
      <Router>
        <Link to="/ChattingScreen">
          <button>react-router</button>
        </Link>
        <Route path="/ChattingScreen" component={ChattingScreen}>
          <ChattingScreen />
        </Route>
      </Router>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  font-family: 'Noto Sans';
`;
