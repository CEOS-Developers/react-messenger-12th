import React from 'react';
import styled from 'styled-components';

export default function Cell({ name, img, message, list }) {
  return (
    <Wrapper>
      <Img src={img} alt={name} list={list} />
      <VStack>
        <Name>{name}</Name>
        {message && <Message>{message}</Message>}
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-around;
`;

const Img = styled.img`
  width: 46px;
  height: 46px;

  margin: ${(props) => (props.list === 'true' ? '16px 10px' : '8px 10px')};

  border-radius: 15px;
`;

const Name = styled.div`
  text-align: left;

  font-size: 13px;
  font-weight: bold;
`;

const Message = styled.div`
  margin-top: 8px;

  text-align: left;

  font-size: 10px;
  font-weight: lighter;
`;
