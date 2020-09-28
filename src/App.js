import React from 'react';
import styled from 'styled-components';

import ChattingScreen from './components/ChattingScreen';

const App = () => {
    return (
        <Wrapper>
            <ChattingScreen />
        </Wrapper>
    );
};
export default App;

const Wrapper = styled.div`
    height: 100vh;
    font-family: sans-serif;
`;
