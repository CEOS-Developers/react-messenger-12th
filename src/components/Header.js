import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header(props) {
	const [person, setPerson] = useState(true);
	const inputTagStyle = {
		display: 'flex',
		height: '100%',
		width: '70px',
		// paddingTop: '3%',
		// paddingLeft: '0px',
		// paddingBottom: '5px',
		borderRadius: '30%',
	}
	
	const divTagPaddingStyle = {
		displya: 'flex',
		paddingLeft: '15px',
		alingContent: 'center',

		paddingTop: '5px'	// 글자 가운데 정렬이 안되어서 임시방편
	}

	const spanTagStyle = {
		display: 'flex',
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
			<div style={divTagPaddingStyle}>
				<PersonNameWrapper>{ person ? '고은\n' : '정쿨\n' }</PersonNameWrapper>
				<span style={spanTagStyle}>현재 활동중</span>
			</div>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: 70px;
	width: 100%;
	padding: 5px 20px;

	background-color: white;
	color: black;
	${'' /* opacity: 0.7; */}
	background: rgba(255, 255, 255, 0.8);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

	display: flex;
	position: absolute;
	position: fixed;
	${'' /* flex-grow: 1; */}
`;

const PersonNameWrapper = styled.span`
	display: flex;
	height: auto;
	font-size: 25px;
`;
