import styled, { css } from "styled-components";

export const FriendRow = styled.li`
  list-style: none;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `}
`;

export const FriendContainer = styled.div``;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;
export const InputBox = styled.form`
  *:focus {
    outline: none;
  }
`;
export const Input = styled.input`
  height: 50px;
  width: 90%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
