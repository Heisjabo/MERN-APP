import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route,
  RouterProvider
} from "react-router-dom"
import App from './App.jsx'
import Hero from "./components/Hero.jsx"
import LoginScreen from "./screens/LoginScreen.jsx"
import RegisterScreen from "./screens/RegisterScreen.jsx"
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Hero />}/>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
