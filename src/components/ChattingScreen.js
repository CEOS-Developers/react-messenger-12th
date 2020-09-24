import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import MessageViewer from './MessageViewer';

export default function ChattingScreen() {
	const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
	const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';
	const liLeftside = {

	};
	const liRightside = {
		display: 'flex',
		justifyContent: 'flex-end'
	};
	let html = '';

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
						<li key={index}>
							{msg.content}
						</li>
					)} else {
						return (
						<li style={liRightside} key={index}>
							{msg.content}
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


	${'' /* background: blue; */}
`;

const MessageWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
`;

// const BoxShowingChatting = styled.div`
// 	flex-grow: 8;
// `