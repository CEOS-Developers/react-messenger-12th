import React from 'react';
import styled from 'styled-components';
import data from '../mylist.json';
export default function MyProfile({ whichState, searching }) {
  const result = data.filter((element) => element.name === 'SangJin');

  return whichState && !searching ? (
    <ProfileRow>
      <ProfileImage src={result[0].url} />
      <ProfilePart>
        <ProfileName>{result[0].name}</ProfileName>
        <ProfileText>나의 상태메시지</ProfileText>
      </ProfilePart>
    </ProfileRow>
  ) : (
    ''
  );
}
const ProfileRow = styled.div`
  &:hover {
    background-color: #f7f6f6;
  }
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-top: 8px;
  margin-bottom: 10px;
  border: 3px solid #f7f6f6;
  border-left-style: none;
  border-right-style: none;
  border-top-style: none;
`;

const ProfilePart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin: 5px;
`;

const ProfileName = styled.div`
  color: black;
  width: 100%;
  margin-left: 8px;
  margin-right: 15px;
`;
const ProfileText = styled.div`
  color: gray;
  font-size: 0.8rem;
  margin: 8px;
`;
