import React from 'react';
import styled from 'styled-components';

const ListName = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default ListName;

const Wrapper = styled.div`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
`;
