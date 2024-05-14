import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Signup from './auth/signup/Signup.jsx';
import Login from './auth/login/Login.jsx';
import Profileinfo from './components/sidebar/Profileinfo.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: 'home',
    element: <Home />,
    children: [{ path: 'profileinfo', element: <Profileinfo /> }],
  },
  { path: 'signup', element: <Signup /> },
  { path: 'login', element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
