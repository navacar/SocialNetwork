import React from 'react';
import './Post.css';

const Post = (props) => (
    <div className='post'>
        <img src='/icons/ObiWan.png' />
        {props.message}
        <div>
            <span className="like">
                Like {props.likeCount}
            </span>
        </div>
    </div>
)

export default Post;