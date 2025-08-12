import { useState } from 'react'
import './components/links.css'
import './components/header.css'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './mainPage'
import Links from './components/links'
import ViewPage from './ViewPage'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/links" element={<Links/>}></Route>
          <Route path="/view/:id" element={<ViewPage/>}></Route>
        </Routes>
      </Router>
    
    </>
  )
}

export default App
