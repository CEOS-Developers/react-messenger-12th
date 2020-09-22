import React from 'react';
import styled from 'styled-components';

const MessageSender = () => {
    return (
        <Wrapper>
            <MessageForm>
                <MessageContent></MessageContent>
            </MessageForm>
            <MessageSendButton type="submit" value="전송"></MessageSendButton>
        </Wrapper>
    );
};

export default MessageSender;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 3%;

    background-color: white;
    position: fixed;
    opacity: 0.9;
    bottom: 0;
`;

const MessageForm = styled.form`
    width: 80%;
`;

const MessageContent = styled.input`
    width: 95%;
    height: 45px;

    border: 1px solid gray;
    border-radius: 17.5px;
`;

const MessageSendButton = styled.input`
    width: 70px;
    height: 45px;

    border-radius: 15px;
    background-color: #ffe066;
    text-align: center;
`;
