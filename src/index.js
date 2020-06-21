import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './State/State';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>
        <App 
        State={Store.getState()} 
        dispatch={Store.dispatch.bind(Store)} 
        />
    </BrowserRouter>, document.getElementById('root'));
        
}

rerenderEntireTree()
Store.subscribe(rerenderEntireTree)

serviceWorker.unregister();
