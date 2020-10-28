import React, { useState } from 'react';
import styled from 'styled-components';

const FindForm = ({ holder, onChangeName }) => {
  const [inputContent, setInputContent] = useState('');

  const onChangeContent = (e) => {
    setInputContent(e.target.value);
    onChangeName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputContent === '') return;
    setInputContent('');
    onChangeName(inputContent);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <FindFrame>
        🔎
        <FindInput
          value={inputContent}
          placeholder={holder}
          onChange={onChangeContent}
        />
      </FindFrame>
    </Wrapper>
  );
};

export default FindForm;

const Wrapper = styled.form`
  display: flex;
  padding: 12px;
  padding-left: 20px;
`;

const FindFrame = styled.div`
  flex: 1 1 10px;
  padding: 8px 8px 10px 8px;
  height: 12px;
  border: 1px solid #f0efef;
  border-radius: 12.5px;
  font-size: 12.5px;
  background-color: #f5f5f5;
`;

const FindInput = styled.input`
  margin-left: 5px;
`;