import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import MessageViewer from './MessageViewer';

export default function ChattingScreen() {
	const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
	const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';
	const liLeftside = {
		display: 'flex',
		alignItems: 'center',
		padding: '15px 5px'
	};
	const liRightside = {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '15px 5px'
	};
	const EunkoImageStyle = {
		// display: 'flex',
		height: '40px',
		paddingTop: '0%',
		paddingRight: '8px',
		borderRadius: '40%'
	};
	const CoolImageStyle = {
		height: '40px',
		paddingTop: '0%',
		paddingLeft: '8px',
		borderRadius: '40%'
	};

	const [messageArr, setMessageArr] = useState( [
		{ user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
		{ user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
		{ user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
		{ user: false, content: '안녕 은아' },
		{ user: false, content: '뭐해 ?' },
		{ user: true, content: '시원아 넌 최고의 팀장이야' },
		{ user: false, content: '나도 아니까  ' },
		{ user: false, content: '그만 말해줘도 돼' },
		{ user: true, content: 'ㅠㅠ' },
	] );

	const [personNowSending, setPersonNowSending] = useState('true');

	const [messageHTML, setMessageHTML] = useState('');

	// useEffect(() => {
	// 	setMessageHTML('')
	// });

	function getMessageSubmit(messageText) {
		setMessageArr([...messageArr, {
			user: personNowSending,
			content: messageText
		}])
		// MSGLIST.push(messageText);
		console.log(messageArr);

		// html = '<ul style="display: flex; flex-direction: column;">';
		// for (let message of messageArr) {
		// 	html += `<li>${message.content}</li>`
		// }
		// html += '</ul>';
		// setMessageHTML(html);
	}

	function getHeaderSubmit(person) {
		setPersonNowSending(!person);
	}

	return (
		<Wrapper>
			<Header onSubmit={getHeaderSubmit}></Header>
			<MessageWrapper>
				{messageArr.map((msg, index) => {
					if (msg.user) {
						return (
						<li style={liLeftside} key={index}>
							<img src="https://img.techpowerup.org/200908/eun.png" style={EunkoImageStyle} />
							<MessageTextWrapper>{msg.content}</MessageTextWrapper>
						</li>
					)} else {
						return (
						<li style={liRightside} key={index}>
							<MessageTextWrapper>{msg.content}</MessageTextWrapper>
							<img src="https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png" style={CoolImageStyle} />
						</li>
					)}
				})}
			</MessageWrapper>
			{/* <MessageViewer messageHtml={messageHTML}></MessageViewer> */}
			<MessageSender onSubmit={getMessageSubmit}></MessageSender>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;
`;

const MessageWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
`;

const MessageTextWrapper = styled.div`
	background-color: white;
	border-radius: 10px;
	box-shadow: 3px 1px 7px  rgba(0, 0, 0, 0.25);

	width: auto;
	height: auto;
	padding: 10px 8px;
`;
// const BoxShowingChatting = styled.div`
// 	flex-grow: 8;
// `
