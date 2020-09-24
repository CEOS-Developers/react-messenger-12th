import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = ({ UserList, toggleUser }) => {
    const [userName, setUserName] = useState('고은');
    const [userStatus, setUserStatus] = useState('현재 활동중');
    const [userImage, setUserImage] = useState(UserList[0]);

    const onClick = () => {
        if (toggleUser()) {
            setUserImage(UserList[0]);
            setUserName('고은');
        } else {
            setUserImage(UserList[1]);
            setUserName('시원');
        }
    };

    return (
        <Wrapper>
            <UserProfile onClick={onClick}>
                <UserImage src={userImage}></UserImage>
            </UserProfile>

            <UserInformatino>
                <UserName>{userName}</UserName>
                <UserStatus>{userStatus}</UserStatus>
            </UserInformatino>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    display: flex;

    width: 100%;
    height: 80px;

    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
`;

const UserProfile = styled.button`
    all: unset;
    margin: 3px 0px 0px 16px;
    width: 70px;
    height: 70px;
`;

const UserImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
`;

// 버튼 크기에 맞게 조절할 수 있으면 좋을듯

const UserInformatino = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 13px;
    padding-left: 16px;
`;

const UserName = styled.div`
    font-size: 25px;
`;

const UserStatus = styled.div``;

const ps = styled.div``;
