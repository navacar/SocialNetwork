import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/ Dialogs/Dialogs';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import { addPost } from './State/State';

const App = (props) => {
	console.log(props)
  return (
    <BrowserRouter>
      <Redirect from='/' to='/profile' />
    	<div className='app-wrapper'>
    		<Header />
        	<Navbar />
        	<div className='app-wrapper-content'>
          		<Route path='/profile' 
					render={() => <Profile 
					ProfilePage={props.State.ProfilePage} 
					dispatch={props.dispatch} />} />
					
				<Route path='/dialogs' 
				  	component={() => <Dialogs State={props.State.DialogsPage}/>} />
     		</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
