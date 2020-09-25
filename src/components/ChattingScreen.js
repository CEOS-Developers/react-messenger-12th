import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';
import ChattingMessage from './ChattingMessage';

const ChattingScreen = () => {
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
    // false: cool  true: eunko
    const userList = [COOL, EUNKO];
    const [status, setStatus] = useState(true);
    const [messageList, setMessageList] = useState(MSGLIST);

    useEffect(() => {
        window.scrollBy(0, 80);
    });
    // switch User function
    const toggleUser = () => {
        if (status) {
            setStatus(false);
            return false;
        } else {
            setStatus(true);
            return true;
        }
    };

    const onChangeMessageList = (newMessage) => {
        setMessageList(messageList.concat(newMessage));
        // 왜 push는 안되는지 모르겠습니다...
    };

    return (
        <Screen>
            <Header userList={userList} toggleUser={toggleUser}></Header>
            {messageList.map((message, k) => {
                if (message.user) {
                    return <ChattingMessage key={k} messageContent={[1, message.content]} userList={userList}></ChattingMessage>;
                } else {
                    return <ChattingMessage key={k} messageContent={[0, message.content]} userList={userList}></ChattingMessage>;
                }
            })}
            <MessageSender message={MSGLIST} status={status} onChangeMessageList={onChangeMessageList}></MessageSender>
            <div style={{ height: '75px' }}></div>
        </Screen>
    );
};

export default ChattingScreen;

const Screen = styled.div``;
