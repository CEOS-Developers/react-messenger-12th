import React from 'react';
import styled from 'styled-components';

export default function MessageSender({messageContent, changeNewMsg, updateMsglist}) {
	return (
		<Wrapper>
			<InputForm onSubmit={updateMsglist}>
				<InputMessage onChange={changeNewMsg} value={messageContent} />
				<SendButton type="submit">전송</SendButton>
			</InputForm>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	position: fixed;
	bottom: 0;
	background-color: rgba(255,255,255,0.8);
	padding: 10px;
`
const InputForm = styled.form`
	display: flex;
`;
const InputMessage = styled.input`
	box-sizing: border-box;
	background-color: rgba(0,0,0,0);
	height: 50px;
	border: none;
	margin: 0 10px 0 0;
	padding: 10px;
	flex: 1;
	font-size: 15px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	&: focus {
		outline: none;
	}
`;
const SendButton = styled.button`
	border: 0;
	outline: 0;
	font-size:15px;
	width: 65px;
	height: 50px;
	border: none;
	border-radius: 20px;
	background-color: rgb(255,224,102);
`;