import './index.css';
import State, { ChangeNewPostText, subscribe } from './State/State';
import {addPost} from './State/State';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = (State, addPost, ChangeNewPostText) => {
    ReactDOM.render(<App State={State} addPost={addPost} ChangeNewPostText={ChangeNewPostText}/>, document.getElementById('root'));
}

rerenderEntireTree(State, addPost, ChangeNewPostText)
subscribe(rerenderEntireTree)

serviceWorker.unregister();
