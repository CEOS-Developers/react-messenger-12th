import React from 'react';
import styled from 'styled-components';

const FindForm = () => {
  return (
    <Wrapper>
      <InputFind placeholder="🔎이름 검색" />
    </Wrapper>
  );
};

export default FindForm;

const Wrapper = styled.form`
  display: flex;
  padding: 12px;
  padding-left: 20px;
`;

const InputFind = styled.input`
  flex: 1 1 10px;
  padding: 8px;
  height: 12px;
  border: 1px solid #f0efef;
  border-radius: 12.5px;
  font-size: 12.5px;
  background-color: #f5f5f5;
`;
