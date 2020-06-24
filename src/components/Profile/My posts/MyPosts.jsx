import React from 'react';
import './MyPosts.css';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        newPostElement.current.value = ''
        props.updateNewPostText(text)
    }

    return (
        <div className="postsblock">
            <h2>My posts</h2>
            <div>
                <div>
                    <div>
                        <textarea onChange={onPostChange} placeholder="Enter post text" ref={newPostElement} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className='posts'>
                {props.PostsElements}
            </div>
        </div>
    );
}
export default MyPosts;