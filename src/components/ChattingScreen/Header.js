import React from 'react';
import styled from 'styled-components';

export default function Header({sender, senderImg, changeSender}) {
	return (
		<Wrapper>
			<SenderChangeButton onClick ={changeSender}>
				<SenderImg src={senderImg} alt="senderImg"/>
			</SenderChangeButton>
			<SenderInfo>
				<SenderName>{sender}</SenderName>
				<div>현재 활동중</div>
			</SenderInfo>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	width: 100%;
	height: 85px;
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: row;
	background-color: rgba(255,255,255,0.8);
	box-shadow: 0 0 10px rgba(0,0,0,0.4);
	color: black;
`;
const SenderChangeButton = styled.button`
	border: 0;
	outline: 0;
	height: 80px;
	margin: 0 0 0 10px;
	background-color: rgba(0,0,0,0);
	border: none;
`;
const SenderImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 20px;
	margin: 5px 0 0 0;
`;
const SenderInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0 0 20px;
`;
const SenderName = styled.h2`
	font-weight: normal;
	font-size: 25px;
	margin: 0;
`;