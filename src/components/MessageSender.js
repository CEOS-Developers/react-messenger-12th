import React, { useState } from 'react';
import styled from 'styled-components';

const MessageSender = ({ status, handleMessageList }) => {
    const [messageContent, setMessageContent] = useState('');

    const onChangeContent = (e) => {
        setMessageContent(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (messageContent === '') {
            alert('공백은 입력하실 수 없습니다.');
            return;
        }
        const newMessage = { user: status, content: messageContent };
        setMessageContent('');
        handleMessageList(newMessage);
    };

    return (
        <Wrapper>
            <MessageForm onSubmit={onSubmit}>
                <MessageContent value={messageContent} onChange={onChangeContent} />
                <MessageSendButton type="submit" value="전송" />
            </MessageForm>
        </Wrapper>
    );
};

export default MessageSender;

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    position: fixed;
    opacity: 0.9;
    bottom: 0;
`;

const MessageForm = styled.form`
    display: flex;
    margin: 10px 3vw;
`;

const MessageContent = styled.input`
    flex: 1 1 100px;
    height: 25px;
    padding: 10px;
    margin-right: 10px;

    border: 1px solid gray;
    border-radius: 17.5px;
`;

const MessageSendButton = styled.input`
    flex: 0.05 0.1 50px;
    height: 45px;

    border-radius: 15px;
    background-color: #ffe066;
    text-align: center;
`;
