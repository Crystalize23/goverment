import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kontak from './pages/Kontak.jsx';
import Visimisi from './pages/Visimisi.jsx';
import News from './pages/News.jsx';
import BarInfo from './pages/Infoberita.jsx';
import Employee from './pages/Employee.jsx';
import Galeri from './pages/Galeri.jsx';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/kontak",
    element: <Kontak />,
  },

  {
    path: "/visi",
    element: <Visimisi />,
  },

  {
    path: "/berita",
    element: <News />,
  },

  {
    path: "/infoberita",
    element: <BarInfo />,
  },

  {
    path: "/pegawai",
    element: <Employee />,
  },

  {
    path: "/galeri",
    element: <Galeri />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
