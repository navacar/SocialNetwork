import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My posts/MyPostsContainer';

const Profile = (props) => {
    return (
    <div>   
        <ProfileInfo />
        <MyPostsContainer 
            Posts={props.ProfilePage.Posts}
            newPostText={props.ProfilePage.newPostText} 
            dispatch={props.dispatch} />
    </div>
)
}
export default Profile;