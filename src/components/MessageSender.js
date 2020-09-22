import React from 'react';
import styled from 'styled-components';

const MessageSender = () => {
    return (
        <Wrapper>
            <ContentInput></ContentInput>
        </Wrapper>
    );
};

export default MessageSender;
const Wrapper = styled.div`
    display: flex;
    width: 1em;
`;

const ContentInput = styled.input`
    margin: 0 0.5em;
    width: 0.95em;
`;
