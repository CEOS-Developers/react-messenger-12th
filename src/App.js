import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import ChattingScreen from "./components/ChattingScreen";
import Friends from "./components/Friends";
import Chat from "./components/Chat";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Wrapper>
        <Route path="/chat" exact={true} component={Chat} />
        <Route path="/friends" exact={true} component={Friends} />
        <Route path="/chatting" exact={true} component={ChattingScreen} />
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  margin-left: 90px;
  & * {
    font-family: sans-serif;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;
