import React from 'react';
import './FriendsList.css'
import Friend from './Friend/Friend';

const FriendList = (props) => {
    let FriendListElement = 
        props.FriendsOnline.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)
    return (
    <div className="FriendList">
        {FriendListElement}
    </div>
)}
export default FriendList;