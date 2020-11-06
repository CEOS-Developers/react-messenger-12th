import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill, BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <Wrapper>
      <Link to="/friends">
        <FaUserAlt color="black" size="30" />
      </Link>
      <Link to="/chat">
        <BsFillChatFill color="black" style={{ paddingTop: "50px" }} size="30" />
      </Link>
      <BsThreeDots color="black" style={{ paddingTop: "50px" }} size="30" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50px;
  border-right: 1px solid;
  position: fixed;
  padding: 30px 10px 0 30px;
`;
