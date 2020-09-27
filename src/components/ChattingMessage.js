import React from 'react';
import styled from 'styled-components';

const ChattingMessage = ({ messageContent, messageSender, userList }) => {
    // 정쿨님이라면 style에 row-reverse를 준다.
    return (
        <>
            {
                <Wrapper messageSender={messageSender}>
                    <UserProfile>
                        <UserImage src={userList[messageSender ? 1 : 0]} />
                    </UserProfile>
                    <UserContent>{messageContent}</UserContent>
                </Wrapper>
            }
        </>
    );
};

export default ChattingMessage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.messageSender ? 'row' : 'row-reverse')};
    align-items: center;
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
    display: flex;
    align-items: center;

    padding: 7px 7px;
    margin: 7.5px;
    height: 32.5px;

    background-color: white;
    border-radius: 10px;

    text-align: center;
`;
