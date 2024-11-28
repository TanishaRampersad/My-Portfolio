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
import Amaranth from './components/Amaranth';

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: 'home',
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: 'work',
          element: <Work />,
          errorElement: <Error />,
        },
        {
          path: 'about',
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: 'contact',
          element: <Contact />,
          errorElement: <Error />,
        },
        {
          path: 'amaranth',
          element: <Amaranth />,
          errorElement: <Error />,
        },
      ],
    },
  ],
  {
    future: { 
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
