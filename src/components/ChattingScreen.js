import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

export default function ChattingScreen() {
	const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
	const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

	const MSGLIST = [
		{ user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
		{ user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
		{ user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
		{ user: false, content: '안녕 은아' },
		{ user: false, content: '뭐해 ?' },
		{ user: true, content: '시원아 넌 최고의 팀장이야' },
		{ user: false, content: '나도 아니까  ' },
		{ user: false, content: '그만 말해줘도 돼' },
		{ user: true, content: 'ㅠㅠ' },
	];

	return (
		<Wrapper>
			<Header></Header>
			<MessageSender></MessageSender>
		</Wrapper>
	);
}

const Wrapper = styled.div``;
