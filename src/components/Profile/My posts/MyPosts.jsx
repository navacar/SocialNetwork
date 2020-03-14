import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const MyPosts = () => {
    let PostData = [
        {message: "Hi, how are you?", likeCount: 100},
        {message: "It's my first post!", likeCount: 59}
    ]

    let PostsElements = PostData
        .map(post => <Post message={post.message} likeCount={post.likeCount} />)

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
                {PostsElements}
            </div>
        </div>
    );
}
export default MyPosts;