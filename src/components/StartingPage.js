import React, { useState } from 'react';
import styled from 'styled-components';

export default function StartingPage() {
  return (
    <Wrapper>
      <img alt="라인 이미지" src="https://play-lh.googleusercontent.com/gxFHTLjBQ7N5WSW4C-u_SRM4k8mGe68xA5pUdLC2PVC5T5h8qwQm8D6VRABKwhz-0Yg">
      </img>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
`
