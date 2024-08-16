import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import JoinRoom from './components/JoinRoom.jsx';
import CreateRoom from './components/CreateRoom.jsx'
import Room from './components/Room.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/joinRoom",
    element: <JoinRoom/>,
  },
  {
    path: "/createRoom",
    element: <CreateRoom/>
  },
  {
    path: "/newRoom",
    element: <Room />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
