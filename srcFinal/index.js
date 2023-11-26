import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/login';
import Home from './components/navbar';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import Pagina1 from './routes/pagina1';
import Pagina2 from './routes/pagina2';
import Pagina3 from './routes/pagina3';
import Pagina4 from './routes/pagina4';
import Sobre from './routes/sobre';

const router = createBrowserRouter([
  {
    path:"/", element:<App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:"/", element: <Login />,
      },
      {
        path:"Home", element: <Home />,
      },
      {
        path:"Contact", element: <Contact />,
      },
      {
        path:"Pagina1", element: <Pagina1 />,
      },
      {
        path:"Pagina2", element: <Pagina2 />,
      },
      {
        path:"Pagina3", element: <Pagina3 />,
      },
      {
        path:"Pagina4", element: <Pagina4 /> 
      },
      {
        path:"Sobre", element: <Sobre />
      }
    ]
  }, 
])
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
