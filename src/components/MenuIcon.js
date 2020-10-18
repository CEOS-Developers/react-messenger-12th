import React from 'react';
import styled from 'styled-components';

const MenuIcon = ({ IMAGE }) => {
  return (
    <Wrapper>
      <PersonButton>
        <PersonImage src={IMAGE} />
      </PersonButton>
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

const PersonButton = styled.button`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

const PersonImage = styled.img`
  width: 25px;
`;
