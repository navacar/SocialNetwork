import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/ Dialogs/Dialogs';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Redirect from='/' to='/profile' />
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
