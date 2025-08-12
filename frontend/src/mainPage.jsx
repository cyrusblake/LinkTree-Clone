import { useState } from 'react'
import Links from './components/links'
import './components/links.css'
import './components/header.css'
import './App.css'
import Header from './components/Header'

function mainPage() {
  

  return (
    <>
      <Header/>
      <Links/>  
    </>
  )
}

export default mainPage;