import React, { useState } from 'react'
import styled from 'styled-components'

export default function Header(props) {
  // 프로필 누구인지
  const [person, setPerson] = useState(true)

  const inputTagStyle = {
    // 메시지 입력창
    display: 'flex',
    height: '100%',
    width: '70px',
    borderRadius: '30%',
  }

  const showWhoActiveTextStyle = {
    // "OO 현재 활동중"
    displya: 'flex',
    paddingLeft: '15px',
    alingContent: 'center',

    paddingTop: '5px', // 글자 가운데 정렬이 안되어서 임시방편
  }

  const activeTextStyle = {
    display: 'flex',
  }

  // ChattingScreen컴포넌트에 현재 프로필 전달
  const formSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(person)
  }

  // 프로필 클릭 시 변경
  const onChangePerson = (e) => {
    setPerson(!person)
  }

  return (
    <Wrapper>
      <form onSubmit={formSubmit}>
        <input
          style={inputTagStyle}
          type="image"
          onClick={onChangePerson}
          src={
            person
              ? 'https://img.techpowerup.org/200908/eun.png'
              : 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png'
          }
        />
      </form>
      <div style={showWhoActiveTextStyle}>
        <PersonNameWrapper>{person ? '고은\n' : '정쿨\n'}</PersonNameWrapper>
        <span style={activeTextStyle}>현재 활동중</span>
      </div>
    </Wrapper>
  )
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
`

const PersonNameWrapper = styled.span`
  display: flex;
  height: auto;
  font-size: 25px;
`
