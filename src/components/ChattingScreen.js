import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

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


export default function ChattingScreen() {

	const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
	const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';


	

	console.log("in chat screeen");
	/*
	if(value!=null){
		console.log("in if")
		let newMSG={user:true, content: value};
		MSGLIST.concat(newMSG);
		console.log("after concat")
	}
	*/
	
	console.log(MSGLIST);

	return (
		<Wrapper>
			<Header user1={EUNKO} user2={COOL} ></Header>
			<MessageList>
				{MSGLIST.map((message, index) => {
					if (message.user) {
						return (
							<ChatLine left>
								<Profile src={EUNKO} width="50" height="50" />
								<ChatBox left>{message.content}</ChatBox>
							</ChatLine>
						)
					}
					return (
						<ChatLine>
							<ChatBox>{message.content}</ChatBox>
							<Profile src={COOL} width="50" height="50" />

						</ChatLine>

					)
				})}
			</MessageList>
			<MessageSender></MessageSender>
		</Wrapper>
	);
}

const Wrapper = styled.div`

`;

const MessageList = styled.div`
background:skyblue;
`;

const ChatLine = styled.div`

display:flex;
justify-content:center;
clear:both;
float:${props => props.left ? 'left' : 'right'}
`
const Profile = styled.img`
border-radius : 50%;
margin-top:15px;
`;
const ChatBox = styled.div`
display:table;
background: grey;
padding 1rem; 
margin-left:10px;
margin-right:10px;
margin-top:15px;
border-radius : 50px;
font-size:15px;

`;


