import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './pages/Chat.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Password from './pages/Password.jsx'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/password' element={<Password />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
