import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const contactList = [
  {id: 1, name: "Sam"},
  {id: 2, name: "Jack"},
  {id: 3, name: "Lily"},
  {id: 4, name: "Katy"}
];

const contactMessages = [
  {id: 1, message: "Hello"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Where are you?"},
  {id: 4, message: "You are ok?"},
];



ReactDOM.render(
  <React.StrictMode>
    <App contactList={contactList} contactMessages={contactMessages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
