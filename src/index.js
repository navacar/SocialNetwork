import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './State/State';


let rerenderEntireTree = () => {
    ReactDOM.render(<App 
        State={Store.getState()} 
        addPost={Store.addPost.bind(Store)} 
        ChangeNewPostText={Store.ChangeNewPostText.bind(Store)} 
        />, document.getElementById('root'));
}

rerenderEntireTree()
Store.subscribe(rerenderEntireTree)

serviceWorker.unregister();
