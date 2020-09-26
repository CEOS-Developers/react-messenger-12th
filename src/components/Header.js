import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = ({ userList, toggleUser, status }) => {
    const [userName, setUserName] = useState('고은');
    const [userStatus] = useState('현재 활동중');
    const [userImage, setUserImage] = useState(userList[1]);

    const onClick = () => {
        toggleUser();
    };

    // status 상태에 따라 프로필 사진이 바뀜
    useEffect(() => {
        if (status) {
            setUserImage(userList[1]);
            setUserName('고은');
        } else {
            setUserImage(userList[0]);
            setUserName('정쿨');
        }
    }, [status]);

    return (
        <Wrapper>
            <UserProfile onClick={onClick}>
                <UserImage src={userImage}></UserImage>
            </UserProfile>

            <UserInformation>
                <UserName>{userName}</UserName>
                <UserStatus>{userStatus}</UserStatus>
            </UserInformation>
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
    top: 0px;
`;

const UserProfile = styled.button`
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

const UserInformation = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 13px;
    padding-left: 16px;
`;

const UserName = styled.div`
    font-size: 25px;
`;

const UserStatus = styled.div``;
