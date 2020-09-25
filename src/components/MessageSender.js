import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function MessageSender(props) {
	
	const [message, setMessage] = useState('');
	
	const inputTagStyle = {	// 메시지 입력칸
		width: '1150px',
		height: '60%',
		paddingLeft: '12px',
		borderRadius: '20px 20px 20px 20px',
		border: '1px solid rgba(0, 0, 0, 0.3)',
		background: 'rgba(255, 255, 255, 0.3)',
		outline: 'none',

		display: 'inline-flex',		// inline으로해야 input과 button이 같은 선상에 있다.
		margin: '10px'
	};

	const inputButtonTagStyle = {	// 전송 버튼
		display: 'inline-flex',
		height: '50px',
		width: '65px',
		borderRadius: '35%',
		backgroundColor: '#FFE066',
		border: 'none',
		outline: 'none',

		textAlign: 'center',
		justifyContent: 'center',
		fontSize: '15px'
	}

	// 입력받은 메시지를 ChattingScreen로 전달.
	const formSubmit = e => {
		e.preventDefault();
		props.onSubmit(message);
		document.querySelector('#messageBox').value = '';
		setMessage('');		// 메시지 한번 전송 후, 메시지state를 초기화 해야함.
	}

	const onChangeMessage = e => {
		setMessage(e.target.value)
	}

	return (
	<Wrapper>
		<SubmitToChattingScreenWrapper onSubmit={formSubmit}>
			<input type="text" id="messageBox" style={inputTagStyle} onChange={onChangeMessage} />
			<input type="submit" style={inputButtonTagStyle} value="전송" />
		</SubmitToChattingScreenWrapper>
	</Wrapper>
	);
}
const Wrapper = styled.footer`
	height: 70px;
	left: 0px;
	bottom: 0px;
	width: 100vw;
	position: fixed;
	
	background-color: white;
	background: rgba(255, 255, 255, 0.8);
	color: black;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

	display: flex;
`;

const SubmitToChattingScreenWrapper = styled.form`
	width: 100%;
`;