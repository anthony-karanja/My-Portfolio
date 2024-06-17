import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
    </>
  )
}

export default App