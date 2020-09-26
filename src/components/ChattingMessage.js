import React from 'react';
import styled from 'styled-components';

const ChattingMessage = ({ messageContent, userList }) => {
    // 정쿨님이라면 style에 row-reverse를 준다.
    return (
        <>
            {messageContent[0] === 1 ? (
                <Wrapper>
                    <UserProfile>
                        <UserImage src={userList[messageContent[0]]} />
                    </UserProfile>
                    <UserContent>{messageContent[1]}</UserContent>
                </Wrapper>
            ) : (
                <Wrapper style={{ flexDirection: 'row-reverse' }}>
                    <UserProfile>
                        <UserImage src={userList[messageContent[0]]} />
                    </UserProfile>
                    <UserContent>{messageContent[1]}</UserContent>
                </Wrapper>
            )}
        </>
    );
};

export default ChattingMessage;

const Wrapper = styled.div`
    display: flex;

    height: 70px;
`;
const OtherMessage = styled(Wrapper)`
    flex-direction: row-reverse;
`;

const UserProfile = styled.div`
    margin: 7.5px;
`;

const UserImage = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 17px;
`;

const UserContent = styled.div`
    padding: 7px 7px;
    margin: 7.5px;
    height: 32.5px;

    background-color: white;
    border-radius: 10px;

    text-align: center;
`;
