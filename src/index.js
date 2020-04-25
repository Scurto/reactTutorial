import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "Message1", likesCount: 11},
    {id: 2, message: "Message2", likesCount: 12}
];

let dialogsData = [
    {id: 1, name: "Name1"},
    {id: 2, name: "Name2"},
    {id: 3, name: "Name3"},
    {id: 4, name: "Name4"},
    {id: 5, name: "Name5"}
];

let messagesData = [
    {id: 1, message: "Message1"},
    {id: 2, message: "Message2"},
    {id: 3, message: "Message3"},
    {id: 4, message: "Message4"},
    {id: 5, message: "Message5"}
];

ReactDOM.render(<App posts={posts} dialogs={dialogsData} messages={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
