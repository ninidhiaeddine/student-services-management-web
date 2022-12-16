import SignIn from './Views/SignIn.js';
import Home from './Views/Home.js'
import StudentSignUp from './Views/StudentSignUp.js'
import StudentHome from './Views/StudentHome.js'
import AdminSignUp from './Views/AdminSignUp.js';
import Welcome from './Views/Welcome.jsx';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Welcome",
      element: <Welcome />
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
    {
      path: "/StudentSignUp",
      element: <StudentSignUp />,
    },
    {
      path: "/AdminSignUp",
      element: <AdminSignUp />,
    },
    {
      path: "/StudentHome",
      element: <StudentHome />,
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
