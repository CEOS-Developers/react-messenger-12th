import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Sidebar() {

    return (
        <Wrapper>
            <Router>
                <Link to="/chatting-screen"><i class="fas fa-user"></i></Link>
                <i class="fas fa-user"></i>
                <i class="fas fa-comment-dots"></i>
                <i class="fas fa-user-plus"></i>
                <i class="fad fa-clock"></i>

                <ServeIcon>
                    <i class="far fa-video-plus"></i>
                    <i class="far fa-square"></i>
                    <i class="far fa-bookmark"></i>
                    <i class="far fa-volume-down"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </ServeIcon>
            </Router>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 20%;
    height: 100%;
    background: #002171;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ServeIcon = styled.div`
    height: 30vh;
    margin-top: 30vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    ${'' /* align-self: flex-start; */}
    ${'' /* align-content: space-around; */}
`