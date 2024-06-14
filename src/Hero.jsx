import React from 'react'

function Hero() {
  return (
    <>
        <div id='hero'>
          <div className='tagline'>
            <h1>Hi I'm Wangui,</h1>
            <h2>I design and develop web applications</h2>
          </div>
          <img src="/Images/Biggerprofile-copy.png" alt="" height='800px' width='800px' />
          <div className='circle'></div>
          <div className='circle1'></div>
        </div>
        <div className='icons'>
          <img src="/Dribble icon.png" alt="dribble" />
          <img src="/Behance icon.png" alt="behance" />
          <img src="/Github icon.png" alt="github" />
          <img src="/Linkedin icon.png" alt="linkedin" />
          {/* <div className='icon'>
            <img src="/mdi_gmail.png" alt="gmail" />
          </div> */}
        </div>
    </>
  )
}

export default Hero