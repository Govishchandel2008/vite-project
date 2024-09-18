import React from 'react'
import Home from './component/Home'
import Service from './component/Service'
import Contact from './component/Contact'
import Login from './component/Login'
import './App.css'


import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
  
      <Routes>
  
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        
      </Routes>
    </div>
  )
}

export default App

