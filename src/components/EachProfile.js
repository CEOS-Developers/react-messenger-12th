import React from 'react';
import styled from 'styled-components';
import ProfileContent from './ProfileContent';
import MyProfile from './MyProfile';
import { Link } from 'react-router-dom';
export default function EachProfile({ searchResult, whichState, searching }) {
  return (
    <Wrapper>
      <MyProfile {...{ whichState, searching }} />
      {searchResult.map((profile, index) => {
        return (
          <Link
            to="/ChattingScreen"
            style={{ textDecoration: 'none' }}
            key={index}
          >
            <ProfileRow key={index} sending={whichState}>
              <ProfileImage src={profile.url} />
              <ProfilePart>
                <ProfileName>{profile.name}</ProfileName>
                <ProfileContent {...{ profile, whichState }} />
              </ProfilePart>
            </ProfileRow>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ProfileRow = styled.div`
  &:hover {
    background-color: #f7f6f6;
  }
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 8px;
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
