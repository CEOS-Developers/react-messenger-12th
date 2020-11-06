import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/ChattingScreen/Header';
import MessageSender from '../components/ChattingScreen/MessageSender';
import Message from '../components/ChattingScreen/Message';
import chatData from '../json/Chat.json';

const USER_T_NAME = '빨강';
const USER_F_NAME = '나';
const USER_T_IMG = 'https://github.com/yunaisme/react-messenger-12th/blob/yunaisme/src/img/red.PNG?raw=true';
const USER_F_IMG = 'https://github.com/yunaisme/react-messenger-12th/blob/yunaisme/src/img/default_profile.PNG?raw=true';

export default function ChattingScreen() {
	const [currentSender, setCurrentSender] = useState(false);
	const [newMsg, setNewMsg] = useState({user: false, content: ''});
	const [currentMsglist, setCurrentMsglist] = useState(chatData.data);
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
			<MessageList>
				<EmptySpace/>
				{currentMsglist.map((message) =>
					<Message sender = {message.user} senderTImg = {USER_T_IMG} senderFImg = {USER_F_IMG} message = {message.content}/>
				)}
				<EmptySpace/>
			</MessageList>
			<MessageSender messageContent = {newMsg.content} changeNewMsg = {handleNewMessageInputChange} updateMsglist = {handleMessageSendFormSubmit} ></MessageSender>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: 100vh;
	background-color: rgb(171,193,209);
`;
const EmptySpace = styled.div`
	height: 80px;
`;

const MessageList = styled.div`
	background-color: rgb(171,193,209);
	padding: 0;
	margin: 0;
`;