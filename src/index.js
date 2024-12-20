import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import{
  createBrowserRouter,RouterProvider}from "react-router-dom"
import Home from './Components/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './Components/Navbar';
import Addzeo from './Components/Addzeo';
import Addbranch from './Components/Addbranch';
import App from './App';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/addzeo",
        element:<Addzeo></Addzeo>,
      },
      {
        path:"/addbranch",
        element:<Addbranch></Addbranch>,
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);
reportWebVitals();
