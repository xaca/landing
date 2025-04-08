import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './pages/about/about'
import Contacto from "./pages/contact/contacto"
import './App.css'
import Home from "./pages/home/home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
    </>
  )
}

export default App
