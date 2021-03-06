import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Redirect } from 'react-router-dom'
import DialogsContainer from './components/ Dialogs/DialogsContainer';


const App = (props) =>{
	return (
		<div>
			<Redirect from='/' to='/profile' />
			<div className='app-wrapper'>
				<Header />
				<Navbar sideBar={props.State.sideBar}/>
				<div className='app-wrapper-content'>
					<Route path='/profile'
						render={() => <Profile
							ProfilePage={props.State.ProfilePage}
							dispatch={props.dispatch} />} />

					<Route path='/dialogs'
						render={() => <DialogsContainer
							DialogsPage={props.State.DialogsPage}
							dispatch={props.dispatch} />} />
				</div>
			</div>
		</div>
	)
						}

export default App;
