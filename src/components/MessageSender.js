import React, { useState } from 'react';
import styled from 'styled-components';

export default function MessageSender(props) {
	
	const [message, setMessage] = useState('');
	
	const formSubmit = e => {
		e.preventDefault();
		props.onSubmit(message);
	}

	const onChangeMessage = e => {
		setMessage(e.target.value)
	}

	return (
	<Wrapper>
		<form onSubmit={formSubmit}>
			<input type="text" onChange={onChangeMessage} />
			{/* <inputMessage type="text" onChange={onChangeMessage}></inputMessage> */}
			<input type="submit" value="전송" />
		</form>
	</Wrapper>
	);
}
const Wrapper = styled.footer`
	height: 60px;
	left: 0px;
	bottom: 0px;
	width: 100vw;
	${'' /* display: flex; */}
	position: fixed;
	
	background-color: white;
	background: rgba(255, 255, 255, 0.8);
	color: black;
	${'' /* flex-grow: 1; */}
`;

// const inputMessage = styled.input`
// 	height: 100%;
// 	width: 100%;
// `;
// 인풋을 styled component로 바꾸지는 못한다.. ?
