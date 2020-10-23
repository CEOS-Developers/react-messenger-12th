import React from 'react';
import styled from 'styled-components';

const MenuIcon = ({ IMAGE, handleisMenuBar }) => {
  return (
    <Wrapper>
      <MenuButton onClick={handleisMenuBar}>
        <MenuImage src={IMAGE} />
      </MenuButton>
    </Wrapper>
  );
};

export default MenuIcon;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding-bottom: 40px;
`;

const MenuButton = styled.button`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

const MenuImage = styled.img`
  width: 25px;
`;
