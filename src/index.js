import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './Views/SignIn.js';
import Home from './Views/Home.js'
import Test from './Views/test.js'
import StudentSignUp from './Views/StudentSignup.js'
import StudentCalendar from './Views/StudentCalendar.js'
import AdminSignUp from './Views/AdminSignUp.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/StudentSignUp",
    element: <StudentSignUp/>,
  },
  {
    path: "/AdminSignUp",
    element: <AdminSignUp/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
