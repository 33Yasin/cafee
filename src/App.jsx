import './App.css'
import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Menu />
      <AboutUs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
