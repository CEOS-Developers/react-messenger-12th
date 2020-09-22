import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
    const dummyData = [];
    const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
    const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';
    const [userName, setUserName] = useState('고은');
    const [userStatus, setUserStatus] = useState('현재 활동중');
    const [userImage, setUserImage] = useState(EUNKO);

    const onClick = () => {
        console.log('clicked');
        setUserImage(COOL);
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
    background-color: white;
    position: fixed;
    opacity: 0.7;
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
