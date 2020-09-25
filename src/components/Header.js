import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header(props) {
	const [person, setPerson] = useState(true);
	const inputTagStyle = {
		display: 'flex',
		height: '80%',
		paddingTop: '3%',
		paddingLeft: '15px',
		borderRadius: '30%'
	}
	
	const formSubmit = e => {
		e.preventDefault();
		props.onSubmit(person);
	}

	const onChangePerson = e => {
		setPerson(!person);
	}

	return (
		<Wrapper>
			<form onSubmit={formSubmit}>
				<input style={inputTagStyle} type="image" onClick={onChangePerson} 
				src={person ? "https://img.techpowerup.org/200908/eun.png" : "https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png"} />
			</form>
			{ person ? '고은' : '정쿨' }
			현재 활동중
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: 100px;
	width: 100%;
	background-color: white;
	color: black;
	opacity: 0.5;

	display: flex;
	position: absolute;
	position: fixed;
	${'' /* flex-grow: 1; */}
`;
