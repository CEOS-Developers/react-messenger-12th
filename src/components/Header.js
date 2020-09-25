import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header(props) {
	const [person, setPerson] = useState(true);
	const inputTagStyle = {
		display: 'flex',
		height: '100%',
		// paddingTop: '3%',
		// paddingLeft: '0px',
		// paddingBottom: '5px',
		borderRadius: '30%',
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
			<PersonNameWrapper>{ person ? '고은\n' : '정쿨\n' }</PersonNameWrapper>
			<br/>
			현재 활동중
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: 70px;
	width: 100%;
	background-color: white;
	color: black;
	${'' /* opacity: 0.7; */}
	background: rgba(255, 255, 255, 0.8);

	padding: 5px 20px;

	display: flex;
	position: absolute;
	position: fixed;
	${'' /* flex-grow: 1; */}
`;

const PersonNameWrapper = styled.span`
	height: 0;
	font-size: 30px;
`;
