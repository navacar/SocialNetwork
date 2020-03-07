import React from 'react';
import './Profile.css';
import MyPosts from './My posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => (
    <div>   
        <ProfileInfo />
        <MyPosts />
    </div>
)

export default Profile;