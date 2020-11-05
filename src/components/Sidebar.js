import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatFill, BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import { withRouter, Link, Route } from "react-router-dom";
import ChattingScreen from "./ChattingScreen";
export default function Sidebar() {
  return (
    <Wrapper>
      <FaUserAlt size="30" />
      <Link to="/chat">
        <BsFillChatFill style={{ paddingTop: "50px" }} size="30" />
      </Link>
      <BsThreeDots style={{ paddingTop: "50px" }} size="30" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  /* left: 25%;
  position: absolute; */

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50px;
  border-right: 1px solid;
  position: fixed;
  padding: 30px 10px 0 30px;
`;
