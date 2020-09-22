import React from "react";
import styled from "styled-components";
import { images } from "./images/image";
export default function Header() {
  return (
    <Wrapper>
      <ProfileImage></ProfileImage>
      <div>
        <h2 style={{ marginBottom: "0" }}>고은</h2>
        현재 활동중
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 20vh;
  color: black;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  background-image: url(${images.COOL});
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 25px;
  display: inline-block;
  margin: 15px;
`;
