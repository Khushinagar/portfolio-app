import React from 'react'
import { useState } from 'react'
import Header, {HeaderPhone} from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home />
    <Work />
    <Experience/>
    <Services/>
    <Testimonial/>
    <Contact />
    <Footer/>
    <Toaster/>
    
    </>
  )
}

export default App