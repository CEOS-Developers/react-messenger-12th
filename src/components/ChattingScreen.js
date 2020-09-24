import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

const ChattingScreen = () => {
    const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
    const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';
    const UserList = [EUNKO, COOL];
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

    const [status, setStatus] = useState(false);
    const toggleUser = () => {
        if (status) {
            setStatus(false);
        } else {
            setStatus(true);
        }

        return status;
    };

    return (
        <Screen>
            <Header UserList={UserList} toggleUser={toggleUser}></Header>
            <MessageSender message={MSGLIST}></MessageSender>
        </Screen>
    );
};

export default ChattingScreen;

const Screen = styled.div`
    height: 100%;
    background-color: #abc1d1;
`;
