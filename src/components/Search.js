import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Header({ setFirstName, setSearching }) {
  const [keyWord, setKeyWord] = useState('');
  const handleSearch = (e) => {
    //search창에서 입력시마다 동작
    //console.log(`${keyWord}찾는중`); //이때 eachprofile보이게
    setKeyWord(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setKeyWord('');
  };

  useEffect(() => {
    setFirstName(keyWord);
    setSearching(true);
  }, [keyWord, setFirstName, setSearching]);

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="🔍 이름 검색"
          value={keyWord}
          onChange={handleSearch}
        ></Input>
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 270px;
  border-radius: 5px;
  border: solid 1px #adadad;
  box-shadow: inset 0 0 5px 5px #e6e6e6;
  outline: none;
  margin: 10px;
`;
const Form = styled.form``;
