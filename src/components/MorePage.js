import React from 'react';
import styled from 'styled-components';

import ListName from './ListName';
import MoreProfile from './MoreProfile';
import MoreFrame from './MoreFrame';

import JINOIMAGE from '../images/JINOIMAGE.jpg';

const MorePage = () => {
  return (
    <>
      <ListName name={'더보기'} />
      <ProfileFrame>
        <MoreProfile
          userImage={JINOIMAGE}
          userName={'지노'}
          statusMessage={'rlawlsdh1127@naver.com'}
        />
      </ProfileFrame>
      <MoreFrame />
    </>
  );
};

export default MorePage;

const ProfileFrame = styled.div`
  padding: 30px 0px 0px 30px;
`;
