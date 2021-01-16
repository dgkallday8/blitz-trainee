import React from 'react'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import './main.scss'

export default function App() {
  return (
      <div className="wrapper">
        <Home />
        <AboutMe />
      </div>
  )
}

