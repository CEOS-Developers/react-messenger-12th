import React from 'react';
import styled from 'styled-components';

const MoreList = ({ listName }) => {
  return <Wrapper>{listName}</Wrapper>;
};

export default MoreList;

const Wrapper = styled.ul`
  padding: 20px;
  height: 20px;
  font-size: 13.5px;
  font-weight: 600;
  &:hover {
    background-color: #f7f6f6;
  }
`;
