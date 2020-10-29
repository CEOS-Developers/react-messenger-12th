import React from 'react';
import styled from 'styled-components';
import MoreList from './MoreList';

const MoreFrame = () => {
  return (
    <Wrapper>
      <MoreList listName={'새소식'} />
      <MoreList listName={'공지사항'} />
      <MoreList listName={'환경설정'} />
      <MoreList listName={'도움말'} />
      <MoreList listName={'카카오톡 정보'} />
    </Wrapper>
  );
};

export default MoreFrame;

const Wrapper = styled.li`
  margin: 20px 50px 0px 10px;
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  justify-content: space-between;
`;
