import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/ Dialogs/Dialogs';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'


const App = (props) => {
  return (
    <BrowserRouter>
      <Redirect from='/' to='/dialogs' />
    	<div className='app-wrapper'>
    		<Header />
        	<Navbar />
        	<div className='app-wrapper-content'>
          		<Route path='/profile' 
					render={() => <Profile 
					ProfilePage={props.State.ProfilePage} 
					dispatch={props.dispatch} />} />
					
				<Route path='/dialogs' 
					render={() => <Dialogs 
					DialogsPage={props.State.DialogsPage}
					dispatch={props.dispatch}/>} />
     		</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
