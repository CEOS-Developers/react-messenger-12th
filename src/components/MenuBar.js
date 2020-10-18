import React from 'react';
import styled from 'styled-components';
import MenuIcon from './MenuIcon';

import PERSONIMAGE from '../images/person.png';
import CHATIMAGE from '../images/chat.png';
import THREEDOTSIMAGE from '../images/threedots.png';

const MenuBar = () => {
  return (
    <Wrapper>
      <MenuIcon IMAGE={PERSONIMAGE} />
      <MenuIcon IMAGE={CHATIMAGE} />
      <MenuIcon IMAGE={THREEDOTSIMAGE} />
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  padding: 30px 15px 15px 15px;
  height: 100%;
  width: 40px;
  background-color: #e7e7e7;
`;
