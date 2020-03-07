import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';


const MyPosts = () => (
    <div className="postsblock">
        <h2>My posts</h2>
        <div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className='posts'>
            <Post message='Hi, how are you?' likeCount='100' />
            <Post message="It's my first post!" likeCount='59' />
        </div>
    </div>
);

export default MyPosts;