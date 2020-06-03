import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let Posts = [
    {message: "Hi, how are you?", likeCount: 100},
    {message: "It's my first post!", likeCount: 59}
]

let DialogData = [
    { id: 1, name: 'Alexandr' },
    { id: 2, name: 'Misha' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Maria' },
    { id: 6, name: 'Andrew' }
]  

let MessageData = [
    { message: 'Hi' },
    { message: 'How are you?' },
    { message: "I'm fine thank you" }
]


ReactDOM.render(<App Posts={Posts} DialogData={DialogData} MessageData={MessageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
