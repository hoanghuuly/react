import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyActFltACdaIaYqnzXAlWw3PRlgg7aoYzw",
   authDomain: "test-9fad8.firebaseapp.com",
   databaseURL: "https://test-9fad8.firebaseio.com",
   projectId: "test-9fad8",
   storageBucket: "test-9fad8.appspot.com",
   messagingSenderId: "561633913552"
 };
 firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
