import React from 'react';
import styled from 'styled-components';

export default function Header({ togglePersonSendingMsg, personSendingMsg }) {
  const T_PersonImage = 'https://img.techpowerup.org/200908/eun.png';
  const F_PersonImage =
    'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

  return (
    <Wrapper>
	  <SendingPersonProfile src={personSendingMsg ? T_PersonImage : F_PersonImage} onClick={togglePersonSendingMsg} />
	  <SendingPersonName>
        <PersonNameWrapper>{personSendingMsg ? '고은' : '정쿨'}</PersonNameWrapper>
        <ActivatingTextWrapper>현재 활동중</ActivatingTextWrapper>
		</SendingPersonName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  padding: 5px 20px;

  background-color: white;
  color: black;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

  display: flex;
  position: absolute;
  position: fixed;
`;

const SendingPersonProfile = styled.img`
	display: flex;
    height: 100%;
    width: 70px;
    border-radius: 30%;
`;

const SendingPersonName = styled.div`
	padding-left: 15px;
    aling-content: center;
    padding-top: 5px;
`;

const PersonNameWrapper = styled.span`
  display: flex;
  height: auto;
  font-size: 25px;
`;

const ActivatingTextWrapper = styled.span`
	display: flex;
`;