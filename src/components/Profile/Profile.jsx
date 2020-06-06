import React from 'react';
import './Profile.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return (
    <div>   
        <ProfileInfo />
        <MyPosts Posts={props.State.Posts}/>
    </div>
)
}
export default Profile;