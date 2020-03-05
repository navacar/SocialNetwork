import React from 'react';
import './Profile.css';
import MyPosts from './My posts/MyPosts';

const Profile = () => (
    <div>   
       <div>
            <img src='https://rtvi.com/upload/iblock/97e/97e9c925b5076f6f80d42f5c03f534f5.jpg' />
        </div>
        <div>
            <img src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg' width='100px' />
            ava + description
        </div>
        <MyPosts />
    </div>
)

export default Profile;