import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
export default function Friends() {
  return (
    <div>
      <Sidebar />
      <h2>친구</h2>
      <InputBox>
        <Input>이름 검색</Input>
      </InputBox>
    </div>
  );
}

const InputBox = styled.form``;
const Input = styled.input`
  height: 50px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
