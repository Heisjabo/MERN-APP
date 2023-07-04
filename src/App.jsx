import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
