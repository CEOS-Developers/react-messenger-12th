import React from "react";
import styled from "styled-components";

export default function MessageSender({
  inputText,
  handleInput,
  handleSubmit,
}) {
  return (
    <InputBox>
      <Input value={inputText} onChange={handleInput} />
      <button onClick={handleSubmit}>전송</button>
    </InputBox>
  );
}

const InputBox = styled.form`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;

  *:focus {
    outline: none;
  }

  button {
    width: 7%;
    height: 50px;
    background-color: yellow;
    border-radius: 20px;
    border: none;
  }
`;
const Input = styled.input`
  height: 50px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

/*
어려웠던점.. 
오른쪽 끝에 배치하기. -> position: absolute를 활용하려고 했더니 text끼리 겹침 현상 발생.
absolute를 통한 배치는 지양하는게 좋다?

map함수 사용하기 위해 object를 array로 바꾸기.

flex-direction : element 방향 뒤집기 가능.

props를 이용해 state, state handler 넘겨주기.

 { ...{ sth} }
 과 {...sth} 차이점

 map에서 key, index 사용하는 이유?



 */
