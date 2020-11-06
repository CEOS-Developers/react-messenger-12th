import React from "react";
import styled from "styled-components";

export default function Header({ user, onClick, imgUrl }) {
  //change parent's user state using props
  const handleClick = () => {
    onClick();
  };

  return (
    <Profile onClick={handleClick}>
      <Img src={imgUrl} />
      <div>
        <h2 style={{ marginBottom: "0" }}> {user} </h2>
        <br />
      </div>
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  div {
    margin-left: 10px;
  }

  padding-left: 20px;
  height: 120px;
  z-index: 1;
  position: fixed;
`;

const Img = styled.img`
  border-radius: 20px;
  width: 100px;
  height: 100px;
`;
