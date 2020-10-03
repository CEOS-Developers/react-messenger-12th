import React from 'react';
import styled from 'styled-components';

export default function Label({ label }) {
  return <Title>{label}</Title>;
}

const Title = styled.h3`
  margin: 0;
  padding: 0;

  color: black;
`;
