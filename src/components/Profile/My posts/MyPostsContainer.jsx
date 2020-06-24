import React from 'react';
import MyPosts from './MyPosts.jsx';
import Post from './Post/Post';
import { changePostActionCreator, addPostActionCreator } from '../../../Redux/ProfileReducer';


const MyPostsContainer = (props) => {
    let PostsElements =
        props.Posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let updateNewPostText = (text) => {
        props.dispatch(changePostActionCreator(text))
    }

    return (
        <MyPosts newPostText={props.newPostText} updateNewPostText={updateNewPostText} addPost={addPost} PostsElements={PostsElements}/>
    );
}
export default MyPostsContainer;