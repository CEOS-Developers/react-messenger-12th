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
			<input type="submit" value="전송" />
		</form>
	</Wrapper>
	);
}
const Wrapper = styled.div`
	height: 60px;
	background: black;
	color: white;
	opacity: 0.5;

	margin-top: auto;
	${'' /* flex-grow: 1; */}
`;
