import React from 'react';
import styled from 'styled-components';

export default function Header() {
	return <Wrapper>발신자 변경해주는 상단바</Wrapper>;
}
const Wrapper = styled.div`
	height: 100px;
	background-color: black;
	color: white;
	opacity: 0.5;

	${'' /* flex-grow: 1; */}
`;
