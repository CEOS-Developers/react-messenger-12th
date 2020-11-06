import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import chatListData from '../json/ChatList.json';

export default class Chatting extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chatList : chatListData,
            searchFriendName : ''
        }
    }
    render(){
        const handleSearch = (e) => {
            e.preventDefault();
            this.setState({searchFriendName : e.target.value});
        }
        const showSearchBar = (
            <SearchBar placeholder="이름 검색" value={this.state.searchFriendName} onChange={handleSearch}/>
        )
        const printChatting = (chats) => {
            chats = chats.filter((chat) => {
                return chat.name.indexOf(this.state.searchFriendName) > -1;
            });
            return chats.map((chat) => {
                return (
                    <Link to={{
                        pathname: `/chatting/${chat.id}`,
                        state: {
                            id : chat.id
                        },
                        }}
                    >
                        <Chat>
                            <SenderImg src={chat.image} alt={chat.name}></SenderImg>
                            <ChatDesc>
                                    <SenderName>{chat.name}</SenderName>
                                    <LastMsg>{chat.lastMsg}</LastMsg>
                            </ChatDesc>
                        </Chat>
                    </Link>
                )
            })
        }
        return(
            <Wrapper>
                <Title>채팅</Title>
                {showSearchBar}
                {printChatting(this.state.chatList.chatList)}
            </Wrapper>
        );
    }
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    padding: 30px;
    margin: 0;
`;
const Chat = styled.div`
    width: 95%;
    display: flex;
    margin: 20px 0 20px 40px;
    padding-bottom: 10px;
`;
const SenderImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    border-radius: 20px;
`;
const ChatDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;
const SenderName = styled.div`
    font-weight: bold;
`;
const LastMsg = styled.div`
    margin-top: 5px;
    color: grey;
    font-size: 12px;
`;
const SearchBar = styled.input`
    box-sizing: border-box;
	background-color: rgba(0,0,0,0);
	height: 50px;
	border: none;
	margin: 0px 30px 20px 30px;
	padding: 10px;
	font-size: 15px;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 20px;
	&: focus {
		outline: none;
	}
`;