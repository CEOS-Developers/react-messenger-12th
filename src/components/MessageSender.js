import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


export default function MessageSender({addToList}) {

	function sendToChattingScreen(message) {
		addToList(message);
	}
    return (
		<SenderForm sendToMessageSender={sendToChattingScreen}/>
    );
}

function SenderForm({sendToMessageSender}) {

	const [message, setMessage] = useState('');

	const handleChangeMessage = (event) => {
		setMessage(event.target.value);
	};
	
	const handleSubmitMessage = (event) => {
		event.preventDefault();

		// 입력이 없을 때 예외 처리
		!message && alert("메세지를 입력해주세요!");
		message && sendToMessageSender(message);

		// textField 비우기
		setMessage('');
	};

	return (
		<Wrapper onSubmit={handleSubmitMessage}>
			<input 
				name="message"
				value={message}
				onChange={handleChangeMessage}
				className="input-message"
			/>
			<button type="submit">전송</button>
		</Wrapper>
	);
}
const Wrapper = styled.form`
// 하단에 고정
	position: fixed; 
	bottom: 0; 
	width: 100%;

	height: 70px;

	background-color: white;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	color: white;
	padding: 4px 16px;

	.input-message {
		width: 90%;
		height: 50px;
		padding: 0 5px;

		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 15px;

		text-align: left;
		font-size: 15px;
	}

	button {
		width: 70px;
		height: 50px;

		margin-right: 35px;
		color: black;
		background-color: rgb(255, 224, 102);

		border: none;
		border-radius: 20px;
		
		box-shadow: 0 0 5px rgba(0,0,0,0.25);

		font-size: 18px;
	}
`;
