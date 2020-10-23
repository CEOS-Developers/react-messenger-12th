import React from 'react';
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
      <MenuIcon IMAGE={PERSONIMAGE} link={'/'} />
      <MenuIcon IMAGE={CHATIMAGE} link={'/chat'} />
      <MenuIcon IMAGE={THREEDOTSIMAGE} link={'/more'} />
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
  background-color: #e7e7e7;
`;

const SettingList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`;
