import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import USER_ICON from '../img/person.png';
import CHATTING_ICON from '../img/chat.png';
import SETTING_ICON from '../img/threedots.png';
import ALARM_ICON from '../img/alarm.png';
import GEAR_ICON from '../img/settings.png';

export default function SideBar() {
    return(
        <Wrapper>
            <Linked>
                <Link to="/">
                    <Button>
                        <ButtonImg src={USER_ICON} alt="user"/>    
                    </Button> 
                </Link>
                <Link to="/chatting">
                    <Button>
                        <ButtonImg src={CHATTING_ICON} alt="chatting"/>    
                    </Button> 
                </Link>
                <Link to="/setting">
                    <Button>
                        <ButtonImg src={SETTING_ICON} alt="setting"/>    
                    </Button> 
                </Link>
            </Linked>
            <UnLinked>
                <Button>
                    <ButtonImg src={ALARM_ICON} alt="alarm"/>    
                </Button> 
                <Button>
                    <ButtonImg src={GEAR_ICON} alt="gear"/>    
                </Button> 
            </UnLinked>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(92, 92, 92);
    width: 100px;
    height: 100%;
    padding: 30px;
    position: fixed;
`;
const Linked = styled.div`
    flex-direction: row;
    height: 50%;
`;
const UnLinked = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 50%;
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    border: 0;
    outline: 0;
    background-color: rgba(255,255,255,0);
    height: 40px;
    width: 40px;
    margin-bottom: 30px;
`;
const ButtonImg = styled.img`
    width: 40px;
    height: auto;
    margin-bottom: 30px;
`;