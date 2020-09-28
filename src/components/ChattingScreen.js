import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './Header';
import MessageSender from './MessageSender';
import Message from './Message';

const USER_T_NAME = '고은';
const USER_F_NAME = '정쿨';
const USER_T_IMG = 'https://img.techpowerup.org/200908/eun.png';
const USER_F_IMG = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

export default function ChattingScreen() {
	const [currentSender, setCurrentSender] = useState(false);
	const [newMsg, setNewMsg] = useState({user: false, content: ''});
	const [currentMsglist, setCurrentMsglist] = useState([
		{ user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
		{ user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
		{ user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
		{ user: false, content: '안녕 은아' },
		{ user: false, content: '뭐해 ?' },
		{ user: true, content: '시원아 넌 최고의 팀장이야' },
		{ user: false, content: '나도 아니까  ' },
		{ user: false, content: '그만 말해줘도 돼' },
		{ user: true, content: 'ㅠㅠ' },
	]);
	function handleSenderButtonClick(event){
		event.preventDefault();
		setCurrentSender(!currentSender);
	}
	function handleNewMessageInputChange(event){
		event.preventDefault();
		setNewMsg({user: currentSender, content: event.target.value});
	}
	function handleMessageSendFormSubmit(event){
		event.preventDefault();
		sendMessage();
	}
	function sendMessage(){
		if(newMsg.content === ''){
			alert('메시지를 입력해주세요');
			return;
		}
		setCurrentMsglist([...currentMsglist, newMsg]);
		setNewMsg({user: currentSender, content: ''});
	}
	let currentSenderName = currentSender ? USER_T_NAME : USER_F_NAME;
	let currentSenderIMG = currentSender ? USER_T_IMG : USER_F_IMG;
	useEffect(() => {
		window.scrollBy(0, window.innerHeight);
	}, [currentMsglist]);

	return (
		<Wrapper>
			<Header sender = {currentSenderName} senderImg = {currentSenderIMG} changeSender = {handleSenderButtonClick} ></Header>
			{currentMsglist.map((message) =>
				<Message sender = {message.user} message = {message.content}/>
			)}
			<MessageSender messageContent = {newMsg.content} changeNewMsg = {handleNewMessageInputChange} updateMsglist = {handleMessageSendFormSubmit} ></MessageSender>
			<EmptySpace/>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	background-color: rgb(171,193,209);
`;
const EmptySpace = styled.div`
	height: 70px;
`;