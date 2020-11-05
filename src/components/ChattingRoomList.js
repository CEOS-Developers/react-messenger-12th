import React, { useState } from 'react';
import styled from 'styled-components';
import ChattingRoom from './ChattingRoom';

export default function ChattingRoomList() {
    return (
        <Wrapper>
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
            <ChattingRoom />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background: grey;
`

// const ChattingRoom = styled.div`
//     height: 10%;
//     width: 100%;
//     background: #ce93d8;
// `