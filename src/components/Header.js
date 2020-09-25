import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header(props) {

	const [count, setCount] = useState(0);
	const userImages=[props.user1,props.user2];
	const userNames=["고은","정쿨"]



	return <Wrapper >
	
		<ProfileCard onClick={() => setCount(count+1)} >
			{console.log(count)}
			<ProfileImage src={userImages[count%2]} width="70" height="70" />
			<ProfileInfo>
				<Name>{userNames[count%2]}</Name>
				<Status>현재 활동 중</Status>
			</ProfileInfo>
		</ProfileCard>

	</Wrapper>;
}
const Wrapper = styled.div`
	background-color: black;
	color: white;
`;
const ProfileCard = styled.div`
background-color: white;
color:black;
display:flex;

`;
const ProfileInfo = styled.div`

flex-direction:column;

`
const ProfileImage = styled.img`
border-radius : 40%;
margin: 15px 15px  0px 15px;
display:flex;

`

const Name = styled.ul`

font-size:20px;
`

const Status = styled.ul`

`