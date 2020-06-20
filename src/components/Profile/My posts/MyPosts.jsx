import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import { addPostActionCreator, changePostActionCreator } from '../../../State/State';


const MyPosts = (props) => {
    let PostsElements = 
        props.Posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        newPostElement.current.value = ''
        props.dispatch(changePostActionCreator(text))
    }

    return (
        <div className="postsblock">
            <h2>My posts</h2>
            <div>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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