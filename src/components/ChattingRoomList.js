import React, { useState } from 'react';
import styled from 'styled-components';

export default function ChattingRoomList() {
    return (
        <Wrapper>
            <div>
                채팅룸1
            </div>
            <div>
                채팅룸2
            </div>
            <div>
                채팅룸3
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100wh;
    width: 100wv;
    background: dark;
`

// const ChattingRoom = styled.div`

// `