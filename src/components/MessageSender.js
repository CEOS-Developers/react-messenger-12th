import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChattingScreen from './ChattingScreen';
//import {msgList} from 'pathToTheFile';
//import MSGLIST from './Chats.jsx';
import useFetch from'./useFetch.js';
/*
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
*/




export default function MessageSender() {

	//console.log("msg list check",MSGLIST);
	const [message, setMessage] = useState([]);
	console.log('checkmessage',message);
	const [newMessage, setNewMessage] = useState();
	let messageToAdd;

	const loading=useFetch(setMessage,"http://localhost:8080/chat");


	const addNewChat=(e)=>{
		
		setNewMessage(e.target.value);
		console.log("in newchat",e.target.value)
	}

	const updateChat =(e)=>{
		e.preventDefault();
		//blank handling
		if(newMessage== undefined){
			alert("type something!!");
			return;
		}
		setMessage([...message,{'user':true, 'content': newMessage}])
		//console.log("try",MSGLIST().MSGLISTs);
		/*
		console.log("BEFORE update",MSGLIST)
		console.log("content",newMessage);
		message.concat({user:true,content:"newMessage"})
		console.log("in update",MSGLIST)
		*/
	}


	const useScroll = () => {
		// state를 생성합니다.
		const [state, setState] = useState({
		  x: 0,
		  y: 0
		});
		// scrll의 값을 가져와 state를 갱신합니다.
		const onScroll = () => {
		  setState({ y: window.scrollY, x: window.scrollX });
		};
		useEffect(() => {
		  window.addEventListener("scroll", onScroll);
		  return () => window.removeEventListener("scroll", onScroll);
		}, []);
		return state;
	  };


	//어떻게 MSGLIST에 더하는지를 모르겠음........msglist에 접근이 안됌 ,,
	return <Wrapper>
		<Form id="add-chat">
			<Input
			type="text"
			onChange={addNewChat}
			></Input>
			<Button onClick={updateChat}
			>전송</Button>
		</Form>
	</Wrapper>;
}
const Wrapper = styled.div`
position:absolute;
bottom:0px;
left:0px;
right:0px;


`;
const Form=styled.form`
display:flex;
height:50px;
padding:10px;
align-content:stretch;
background-color:white;
box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
background: white;
`

const Input = styled.input`
flex-grow:5;
type="text";
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius:10%;
margin-right :15px;
margin-left :15px;
`;
const Button = styled.button`
flex-grow:1;
height:30

margin-right: 10px;
border:none;
border-radius:20px;
background-color:	#FFFF00;
text-align:center


`;