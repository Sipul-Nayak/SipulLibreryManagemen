import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import AdminLogin from './Components/AdminLogin'
import Landing from './Components/Landing'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/Landing" element={<Landing />} />

    </Routes>
    </>

  )
}

export default App
