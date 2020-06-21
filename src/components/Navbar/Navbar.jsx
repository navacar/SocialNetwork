import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import FriendList from './FriendsOnline/FriendsList';

const Navbar = (props) => (
    <nav className='nav'>
        <div className="item">
            <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
        </div>
        <div className="item active">
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className="item">
            <a>News</a>
        </div>
        <div className="item">
            <a>Music</a>
        </div>
        <div className="item">
            <a>Setings</a>
        </div>
        <div className="friends">
            <a>Friends</a>
            <div>
                <FriendList FriendsOnline={props.NavBarPage.FriendsOnline}/>
            </div>
        </div>
        
    </nav>
)

export default Navbar;