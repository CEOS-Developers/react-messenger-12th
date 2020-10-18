import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search';
import EachProfile from './EachProfile';
import data from '../list.json';

export default function Profile({ whichState }) {
  const [firstName, setFirstName] = useState('');
  const [searchResult, setSearchResult] = useState(data);

  const filterProfile = (find) => {
    if (find === '') {
      setSearchResult(data); //초기화면
    } else {
      //검색한거만 필터링
      const result = data.filter((element) => element.name === find);
      console.log(result);
      setSearchResult(result);
    }
  };

  useEffect(() => {
    filterProfile(firstName);
  }, [firstName]);

  return (
    <Wrapper>
      <Search
        {...{
          setFirstName,
        }}
      ></Search>
      <EachProfile {...{ searchResult, whichState }}></EachProfile>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
