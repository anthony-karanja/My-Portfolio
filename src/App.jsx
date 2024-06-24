import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services';
import Footer from './Footer';
import Resume from './Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
      <Resume /> */}
    </>
  )
}

export default App