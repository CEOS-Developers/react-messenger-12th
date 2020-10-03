import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Cell from './Cell';

export default function List({ data, from, route }) {
  const { match, history } = route;
  const [selected, setSelected] = useState(-1);
  const listData = data;
  const isChatList = from === 'CHAT' ? 'true' : 'false';
  const list =
    listData &&
    listData.map((item, index) => {
      return (
        <Button
          key={index}
          isSelected={selected === index ? true : false}
          onClick={() => {
            setSelected(index);
          }}
          onDoubleClick={() => {
            match.params = { data: data };
            history.push(`${match.url}/${item.idx}`);
          }}
        >
          <Cell key={index} name={item.name} img={item.image} message={item.message} list={isChatList} />
        </Button>
      );
    });

  return <Wrapper>{list}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;

  margin: 0;
  margin-top: 100px;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;

  padding: 0;

  border: none;

  background-color: ${(props) => (props.isSelected === true ? '#ededed' : 'white')};

  outline: none;
`;
