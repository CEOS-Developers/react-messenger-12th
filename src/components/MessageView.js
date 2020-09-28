import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function MessageView(props) {
    const T_PersonImage = "https://img.techpowerup.org/200908/eun.png";
    const F_PersonImage = "https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png";

    return (
        <Wrapper>
            {props.messageArr.map((message, index) => {
                return (
                    <Message message={message} key={index}>
                        <MessageSenderImage src={message.user ? T_PersonImage : F_PersonImage} />
                        <MessageContent>{message.content}</MessageContent>
                    </Message>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    list-style: none;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 0 0 10px 10px;
	
	background-color: #ABC1D1;
`;

const Message = styled.li`
    display: flex;
	alignItems: center;
    flex-direction: ${props => props.message.user ? 'row' : 'row-reverse'};
	padding: 15px 0;
`;

const MessageSenderImage = styled.img`
    display: flex;
    height: 50px;
    ${'' /* paddingTop: 0%; */}
    border-radius: 40%;
    box-shadow: 3px 1px 7px  rgba(0, 0, 0, 0.25);
`;

const MessageContent = styled.div`
    background-color: white;
	border-radius: 10px;
	box-shadow: 3px 1px 7px  rgba(0, 0, 0, 0.25);

	width: auto;
	height: auto;
	padding: 10px 8px;
	margin: 0 8px;
`;