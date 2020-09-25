import React from "react";
import styled from "styled-components";
import { images } from "./images/image";

export default function Header(props) {
  //change parent's user state using props
  const handleClick = () => {
    props.onClick();
  };

  return (
    <Profile onClick={handleClick}>
      {/* if user value is false */}
      {/* I hate this code!!!!!! I want simpler code... */}
      {!props.user && (
        <>
          <img src={images.COOL} />
          <div>
            <h2 style={{ marginBottom: "0" }}>정쿨</h2>
            <br />
            현재 활동중
          </div>
        </>
      )}
      {/* if user value is true */}
      {props.user && (
        <>
          <img src={images.EUNKO} />
          <div>
            <h2 style={{ marginBottom: "0" }}>고은</h2>
            <br />
            현재 활동중
          </div>
        </>
      )}
    </Profile>
  );
}

const Profile = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;

  div {
    margin-left: 10px;
  }

  img {
    border-radius: 20px;
    width: 100px;
    height: 100px;
  }

  padding-left: 20px;
  height: 120px;
  z-index: 1;
  position: fixed;
  opacity: 0.8;
`;
