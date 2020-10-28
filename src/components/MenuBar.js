import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MenuIcon from './MenuIcon';

import PERSONIMAGE from '../images/person.png';
import CHATIMAGE from '../images/chat.png';
import THREEDOTSIMAGE from '../images/threedots.png';
import SETTINGSIMAGE from '../images/settings.png';
import ALARMIMAGE from '../images/alarm.png';

const MenuBar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <MenuIcon IMAGE={PERSONIMAGE} />
      </Link>
      <Link to="/chat">
        <MenuIcon IMAGE={CHATIMAGE} link={'/chat'} />
      </Link>
      <Link to="/more">
        <MenuIcon IMAGE={THREEDOTSIMAGE} />
      </Link>
      <SettingList>
        <MenuIcon IMAGE={ALARMIMAGE} />
        <MenuIcon IMAGE={SETTINGSIMAGE} />
      </SettingList>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 40px;
  flex-direction: column;
  padding: 30px 15px 15px 15px;
  height: 100%;
  width: 30px;
  background-color: #e7e7e7;
  position: fixed;
`;

const SettingList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 30px;
  height: 100%;
`;
