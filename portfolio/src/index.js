import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Error from './components/Error';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: '/home',
            element: <Home />,
            errorElement: <Error />,
          },
        {
          path: '/work',
          element: <Work />,
          errorElement: <Error />,
        },
        {
          path: '/about',
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: '/contact',
          element: <Contact />,
          errorElement: <Error />,
        },
       
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
