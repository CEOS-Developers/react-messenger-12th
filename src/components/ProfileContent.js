import React from 'react';
import styled from 'styled-components';
import PlayLogo from '../play.jpg';
export default function ProfileContent({ profile, whichState }) {
  return whichState ? (
    <Wrapper sending={whichState}>
      <ProfileName>
        {profile.song}
        <img
          src={PlayLogo}
          width="30px"
          alt="profile"
          style={{ marginLeft: '5px' }}
        />
      </ProfileName>
    </Wrapper>
  ) : (
    <Wrapper sending={whichState}>{profile.chatting}</Wrapper>
  );
}

const Wrapper = styled.div`
  color: gray;
  font-size: 0.8rem;
  margin: ${(props) => (props.sending ? '' : '8px')};
  text-align: ${(props) => (props.sending ? 'right' : '')};
  width: ${(props) => (props.sending ? '' : '200px')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 10px;
  float: right;
  border: 3px solid #00ff00;
`;
