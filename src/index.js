import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIN from './Components/SignInPage.js';
import Main from './Components/MainPage.js'
import Test from './Components/test.js'
import SignUp from './Components/StudentSignUp.js'
import SignUpAdmin from './Components/AdminSignUp.js'

import 'bootstrap/dist/css/bootstrap.min.css';
//images
//import logo from './Picture1.png';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Main/>
  //<SignIN/>
  <SignUpAdmin/>
  //<Test/>
); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
