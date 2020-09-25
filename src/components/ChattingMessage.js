import React from 'react';
import styled from 'styled-components';

const ChattingMessage = ({ messageContent, userList }) => {
    // if user==COOL flex-direction: row-reverse
    return (
        <>
            {messageContent[0] == 1 ? (
                <Wrapper>
                    <UserProfile>
                        <UserImage src={userList[messageContent[0]]} />
                    </UserProfile>
                    <UserContent>{messageContent[1]}</UserContent>
                    <UserProfile></UserProfile>
                </Wrapper>
            ) : (
                <Wrapper style={{ flexDirection: 'row-reverse' }}>
                    <UserProfile>
                        <UserImage src={userList[messageContent[0]]} />
                    </UserProfile>
                    <UserContent>{messageContent[1]}</UserContent>
                    <UserProfile></UserProfile>
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

const UserProfile = styled.div`
    margin: 7.5px;
`;

const UserImage = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 17px;
`;

const UserContent = styled.div`
    padding: 7.5px 5px;
    margin: 7.5px;
    height: 32.5px;

    background-color: white;
    border-radius: 10px;

    text-align: center;
`;
