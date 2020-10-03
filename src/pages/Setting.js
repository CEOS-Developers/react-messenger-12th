import React from 'react';
import styled from 'styled-components';

// Components
import Label from '../components/Label';

export default function Setting() {
  return (
    <Wrapper>
      <Fixed>
        <HStack>
          <Label label="더보기" />

          <Label label="Ver. 2.6.6" />
        </HStack>
        <Img
          src="https://user-images.githubusercontent.com/56102421/94956342-fd35f500-0526-11eb-867c-07e03702c901.png"
          alt=""
        />
      </Fixed>
      <VStack>
        <Label label="새소식" />
        <Label label="공지사항" />
        <Label label="환경설정" />
        <Label label="도움말" />
        <Label label="카카오톡 정보" />
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // width: 100%;
  height: 100%;

  margin-left: 70px;

  display: flex;
  flex-direction: column;
`;

const HStack = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: space-between;
`;

const VStack = styled.div`
  height: 300px;

  margin-top: 300px;
  margin-left: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Fixed = styled.div`
  position: fixed;
  left: 70px;
  right: 16px;

  padding-left: 16px;
  padding-top: 16px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 90px;
  margin-top: 100px;
`;
