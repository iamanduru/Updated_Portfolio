// src/App.jsx
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import FooterNav from './components/FooterNav'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Main content grows to fill the space */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/contact" element={<Contact/>} />
           
            
            {/* catch-all */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>

     <FooterNav/>
    </div>
  )
}
