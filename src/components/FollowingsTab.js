import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FOLLOWERSLIST = [
    {
      img:
        'https://static.news.zumst.com/images/29/2019/07/11/177ed9dc438e401982b4d5379aad1ab2.jpg',
      id: 'abcd',
      name: '가유빈',
    },
    {
      img:
        'https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjlfODMg/MDAxNTU5MDk3MzkzNjM0.3AmX8o0ocVSBOQWT16avlyAm_rk9bIREiTopeSAqMEkg.vN-D-Wi5zOqoGYS-TJZ7rsfS3WtbNZtJRU4EkgCjquog.JPEG.sungdevilsh/IMG_1840.JPG?type=w800',
  
      id: 'abcde',
      name: '나유빈',
    },
  
    {
      img: 'https://t1.daumcdn.net/cfile/tistory/99E736335A13EDDE04',
      id: 'abcda',
      name: '유유유',
    },

  ];
  

export default function FollowingsTab({}) {

  console.log("hi followingsTbab")
  const [search, setSearch] = useState('');
  const [followersList, setFollowersList] = useState(FOLLOWERSLIST);
  const [filteredFollowers, setFilteredFollowers] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);

  };


  useEffect(() => {
    setFilteredFollowers(
      followersList.filter((followers) => {
        return (
          followers.id.toLowerCase().includes(search.toLowerCase()) ||
          followers.name.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, followersList]);

  return (
    <Wrapper>
      <SearchBox
        type='text'
        placeholder='search'
        onChange={handleChange}
        size='60'
      ></SearchBox>
      <Profile>
        {filteredFollowers.map((info, index) => {
          return (
            <ProfileCard>
              <ProfileImage src={info.img} width='70' height='70' />
              <ProfileInfo>
                <FollowersID>{info.id}</FollowersID>
                <Name>{info.name}</Name>
              </ProfileInfo>
              <RemoveButton>Remove</RemoveButton>
            </ProfileCard>
          );
        })}
      </Profile>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
`;

const RemoveButton = styled.button`
  position: fixed;
  right: 10px;
  background-color: white;
  border-radius: 10%;
  margin-top: 25px;
`;
const Profile = styled.div`
  width: 100%;
`;

const ProfileCard = styled.div`
  background-color: white;
  color: black;
  display: flex;
  margin-right: 20px;
`;
const ProfileInfo = styled.div`
  flex-direction: column;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  margin: 15px 15px 0px 15px;
  display: flex;
`;

const ID = styled.ul`
  font-size: 20px;
  padding-top: 5px;
  text-align: center;
`;
const Name = styled.ul`
  font-size: 10px;
`;

const SearchBox = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10%;
  margin-top: 10px;
  margin-right: 15px;
  margin-left: 15px;
`;

const FollowersID = styled.ul`
  font-size: 20px;
`;
