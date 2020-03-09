import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const MyPosts = () => {
    let PostData = [
        {message: "Hi, how are you?", likeCount: 100},
        {message: "It's my first post!", likeCount: 59}
    ]
    return (
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
                <Post message={PostData[0].message} likeCount={PostData[0].likeCount} />
                <Post message={PostData[1].message} likeCount={PostData[1].likeCount} />
            </div>
        </div>
    );
}
export default MyPosts;