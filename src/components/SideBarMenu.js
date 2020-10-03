import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBarMenu() {
  const [selected, setSelected] = useState('');
  const handleImageClicked = (event) => {
    setSelected(event.target.alt);
  };
  return (
    <Wrapper>
      <TopIcons>
        <Link to="/">
          <Img
            selected={selected === '홈' ? true : false}
            onClick={handleImageClicked}
            src="https://user-images.githubusercontent.com/56102421/94989369-40d44180-05af-11eb-9add-f3b5584932af.png"
            alt="홈"
          />
        </Link>
        <Link to="/friend">
          <Img
            selected={selected === '친구' ? true : false}
            onClick={handleImageClicked}
            src="https://user-images.githubusercontent.com/56102421/94927907-dadbb180-04fd-11eb-836d-d0f2dedf7abb.png"
            alt="친구"
          />
        </Link>
        <Link to="/chat">
          <Img
            selected={selected === '채팅' ? true : false}
            onClick={handleImageClicked}
            src="https://user-images.githubusercontent.com/56102421/94927901-d911ee00-04fd-11eb-9745-923c39c7bd27.png"
            alt="채팅"
          />
        </Link>
        <Link to="/setting">
          <Img
            selected={selected === '설정' ? true : false}
            onClick={handleImageClicked}
            src="https://user-images.githubusercontent.com/56102421/94927894-d616fd80-04fd-11eb-8352-6a3cbf414695.png"
            alt="설정"
          />
        </Link>
      </TopIcons>
      <BottomIcons>
        <Img
          className="alarm"
          src="https://user-images.githubusercontent.com/56102421/94927897-d7e0c100-04fd-11eb-8d57-1f3ddea2abb9.png"
          alt="알람"
        />
        <Img
          src="https://user-images.githubusercontent.com/56102421/94926671-15444f00-04fc-11eb-9b98-f2142c434144.png"
          alt="설정"
        ></Img>
      </BottomIcons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70px;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #423530;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopIcons = styled.div`
  margin-top: 75px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomIcons = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 25px;

  margin: 0;
  padding: 6px 0;

  color: white;
  opacity: ${({ selected }) => (selected ? '0.9' : '0.3')};

  .alarm {
    margin-bottom: 30px;
  }
`;
