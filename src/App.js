import React from 'react';
import styled from 'styled-components';

import PageLayout from './components/PageLayout';

const App = () => {
  return (
    <Wrapper>
      <PageLayout />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  font-family: 'Noto Sans';
`;
