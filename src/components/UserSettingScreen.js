import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { PersonAdd } from '@styled-icons/ionicons-outline/PersonAdd';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import {Timeline} from '@styled-icons/material/Timeline';
import {Notifications} from '@styled-icons/ionicons-outline/Notifications';
import {PrivacyTip} from '@styled-icons/material/PrivacyTip';
import {HelpCircle} from '@styled-icons/boxicons-regular/HelpCircle';

export default function UserSettingScreen({}) {
  const [color, setColor] = useState('white');
  return (
    <Wrapper>
      <Search>
        <SettingSection>
          <Blank>
            <PersonAdd size='20' />
          </Blank>
          Follow and Invite Friends
          <ChevronRight size='25' color='grey' />
        </SettingSection>
        <SettingSection>
          <Blank>
            <Timeline size='20' />
          </Blank>
          Your Activity
          <ChevronRight size='25' color='grey' />
        </SettingSection>
        <SettingSection>
          <Blank>
            <Notifications size='20' />
          </Blank>
          Notifications
          <ChevronRight size='25' color='grey' />
        </SettingSection>
        <SettingSection>
          <Blank>
            <PrivacyTip size='20' />
          </Blank>
          Privacy
          <ChevronRight size='25' color='grey' />
        </SettingSection>
        <SettingSection>
          <Blank>
            <HelpCircle size='20' />
          </Blank>
          Help
          <ChevronRight size='25' color='grey' />
        </SettingSection>
     <hr class="solid"></hr>
    <Blank> <h3 >Logins</h3></Blank>
    <SettingSection>
          Login info
          <ChevronRight size='25' color='grey' />
        </SettingSection>
        <SettingSection>Add Account</SettingSection>
        <SettingSection>Log Out</SettingSection>


      </Search>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Search = styled.div`
  margin-top: 10px;
  
`;
const LoginsSetting=styled.h4`
margin-left: 15px;
margin-top:10px;
color:skyblue;
font-size: 15px;
`;
const SettingSection = styled.button`
  width: 80%;
  font-size: 18px;
  margin-left: 10px;
  display: flex;
  border: none;
  background-color: white;
  transition-duration: 0.4s;
  border-radius: 8px;
  &:hover {
    background-color: #e1dfdf;
    color: black;
  }
`;

const Blank = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;
