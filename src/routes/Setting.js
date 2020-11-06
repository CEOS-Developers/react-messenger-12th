import React from 'react';
import styled from 'styled-components';
import DEFAULT_PROFILE from '../img/default_profile.PNG';

export default function Setting() {
    return(
        <Wrapper>
            <Title>더보기</Title>
            <Profile>
                <ProfileImg src={DEFAULT_PROFILE} alt="default profile"></ProfileImg>
                <ProfileDesc>
                    <ProfileName>황유나</ProfileName>
                    <ProfileState>kkkkkk@kkkk.com</ProfileState>
                </ProfileDesc>
            </Profile>
            <Menu>
                <MenuTab>새소식</MenuTab>
                <MenuTab>정보</MenuTab>
                <MenuTab>공지사항</MenuTab>
                <MenuTab>도움말</MenuTab>
                <MenuTab>문의하기</MenuTab>
            </Menu>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    padding: 30px;
    margin: 0;
`;
const Profile = styled.div`
    display: flex;
    margin: 20px 0 20px 40px;
`;
const ProfileImg = styled.img`
    width: 50px;
    margin: 0;
    border-radius: 20px;
`;
const ProfileDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 20px 40px;
`;
const MenuTab = styled.h3`
    font-weight: normal;
    padding-top: 20px;
    margin: 0;
`;
const ProfileName = styled.div`
    font-weight: bold;
`;
const ProfileState = styled.div`
    margin-top: 5px;
    color: grey;
    font-size: 12px;
`;