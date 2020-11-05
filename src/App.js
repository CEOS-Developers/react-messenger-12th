import React from 'react'
import styled from 'styled-components'

import ChattingScreen from './components/ChattingScreen'
// import Sidebar from './components/Sidebar'
import ChattingRoomList from './components/ChattingRoomList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Container>
      <AppScreen>
        <Router>
        <Sidebar>
          <i class="fas fa-user"></i>
          <Link to="/chatting-room-list"><i class="fas fa-comment-dots"></i></Link>
          <i class="fas fa-user-plus"></i>
          <i class="fad fa-clock"></i>
          <ServeIcon>
            <i class="far fa-video-plus"></i>
            <i class="far fa-square"></i>
            <i class="far fa-bookmark"></i>
            <i class="far fa-volume-down"></i>
            <i class="fas fa-ellipsis-h"></i>
          </ServeIcon>
        </Sidebar>

        <RigthSideContainer>
        <AppController />
        <Switch>
          <MainScreen>
            <Route path="/chatting-room-list" component={ChattingRoomList} />
          </MainScreen>
        </Switch>
        </RigthSideContainer>
        </Router>
      </AppScreen>
    </Container>

    // <Wrapper>
    //   <ChattingScreen></ChattingScreen>
    // </Wrapper>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: grey;
`
const AppScreen = styled.div`
  height: 100%;
  width: 30%;
  background: white;
  display: flex;
`

const Sidebar = styled.div`
    width: 20%;
    height: 100%;
    background: #002171;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ServeIcon = styled.div`
    height: 30%;
    margin-top: 240%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const AppController = styled.div`
  width: 100%;
  height: 5%;
  background: #5472d3;
`
const MainScreen = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const RigthSideContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
`

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
  background: #abc1d1;
`
