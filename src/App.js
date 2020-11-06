import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import User from './routes/User';
import Chatting from './routes/Chatting';
import ChattingScreen from './routes/ChattingScreen';
import Setting from './routes/Setting';
import './App.css';

export default function App() {
	return (
		<HashRouter>
			<SideBar />
			<div className="content">
				<Route path="/" exact={true} component={User}/>
				<Route path="/chatting" exact={true} component={Chatting}/>
				<Route path="/chatting/:id" exact={true} component={ChattingScreen}/>
				<Route path="/setting" exact={true} component={Setting}/>
			</div>
		</HashRouter>
	);
}