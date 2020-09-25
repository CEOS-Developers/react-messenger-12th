import React from 'react';
import styled from 'styled-components';

import ChattingScreen from './components/ChattingScreen';

export default function App() {
	return (
		
		<Wrapper>  {/*Wrapper components are components that surround unknown components and provide a default structure to display the child components.*/}
			<ChattingScreen></ChattingScreen>
			
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;
	& * {
		font-family: sans-serif;
	}
`;
