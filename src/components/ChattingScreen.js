import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

export default function ChattingScreen() {
	const liLeftside = {	// 고은님 메시지 li
		display: 'flex',
		alignItems: 'center',
		padding: '15px 0'
	};
	const liRightside = {	// 정쿨님 메시지 li
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '15px 5px'
	};
	const EunkoImageStyle = {	// 고은님 메시지 image
		height: '50px',
		paddingTop: '0%',
		borderRadius: '40%',
		boxShadow: '3px 1px 7px  rgba(0, 0, 0, 0.25)'
	};
	const CoolImageStyle = {	// 정쿨님 메시지 image
		height: '50px',
		paddingTop: '0%',
		borderRadius: '40%',
		boxShadow: '3px 1px 7px  rgba(0, 0, 0, 0.25)'

	};

	// 입력받은 메시지 저장소
	const [messageArr, setMessageArr] = useState( [
		{ user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
		{ user: true, content: '여러분께 소개드리고 싶은 사람이 있어요~'},
		{ user: true, content: '바로 12기의 장창훈 이라고 하시는 분입니다 !!!' },
		{ user: false, content: '안녕 은아' },
		{ user: false, content: '뭐해 ?' },
		{ user: true, content: '지금 장창훈님을 소개하고있어' },
		{ user: false, content: '나도 아니까  ' },
		{ user: false, content: '그만 말해줘도 돼' },
		{ user: true, content: 'ㅠㅠ...' },
	] );

	// 현재 누구 프로필인지 판단재료
	const [personNowSending, setPersonNowSending] = useState('true');

	// 입력 받은 메시지를 메시지저장소에 추가
	function getMessageSubmit(messageText) {
		if (messageText=='') {
			alert('메시지부터 입력하세요 ^^');
			return;
		}

		setMessageArr([...messageArr, {
			user: personNowSending,
			content: messageText
		}])
	}

	// 프로필 변경 감지
	function getHeaderSubmit(person) {
		setPersonNowSending(!personNowSending);
	}

	// 메시지 보내지면 스크롤 내림
	useEffect(() => {
		window.scrollBy(1000, 1000);
	}, [messageArr]);		// 프로필 변경시 scrollBy 작동 방지.

	return (
		<Wrapper>
			<Header onSubmit={getHeaderSubmit}></Header>
			<pre><br/></pre>
			<MessageWrapper>
				{messageArr.map((msg, index) => {	// 각 메시지를 li로 변환
					if (msg.user) {	// 고은님이면
						return (
						<li style={liLeftside} key={index}>
							<img src="https://img.techpowerup.org/200908/eun.png" style={EunkoImageStyle} />
							<MessageTextWrapper>{msg.content}</MessageTextWrapper>
						</li>
					)} else {	// 정쿨님이면
						return (
						<li style={liRightside} key={index}>
							<MessageTextWrapper>{msg.content}</MessageTextWrapper>
							<img src="https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png" style={CoolImageStyle} />
						</li>
					)}
				})}
			</MessageWrapper>
			<pre><br/></pre>	{/* 공백 생성 */}
			<MessageSender onSubmit={getMessageSubmit}></MessageSender>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;
`;

// 채팅 보이는 공간
const MessageWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 0 0 10px 10px;
	
	background-color: #ABC1D1;
`;

// 메시지의 말풍선 박스
const MessageTextWrapper = styled.div`
	background-color: white;
	border-radius: 10px;
	box-shadow: 3px 1px 7px  rgba(0, 0, 0, 0.25);

	width: auto;
	height: auto;
	padding: 10px 8px;
	margin: 0 8px;
`;