import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard.tsx'
import NewBookPage from './Book/New/NewBook.tsx'
import Read from './Read/Read.tsx'

var router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/book/new",
    element: <NewBookPage />
  },
  {
    path: "/read",
    element: <Read />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
