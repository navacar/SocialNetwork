import React from 'react';
import './Profile.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
    <div>   
        <ProfileInfo />
        <MyPosts 
            Posts={props.ProfilePage.Posts}
            newPostText={props.ProfilePage.newPostText} 
            dispatch={props.dispatch} />
    </div>
)
}
export default Profile;