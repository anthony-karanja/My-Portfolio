import React from 'react'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

function AboutMe() {
  return (
    <>
        <NavBar />
        <div id='aboutme'>
          <h2>Hi there, I'm Wangui</h2>  
          <h5>A product designer and frontend developer</h5>
        </div>
        <Footer />
    </>
  )
}

export default AboutMe