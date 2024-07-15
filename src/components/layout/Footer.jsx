import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <>
        <div id='footer'>
          <h3>Let's Connect and Talk</h3>
          <div className='footerIcons'>
            {/* <div>
            <h5>Reach me on my socials</h5>
            </div> */}
            <a href="https://www.behance.net/wanguinjoroge" target='_blank'><img src="/Behance icon.png" alt="behance" className='footerIcon' /></a>
            <a href="https://dribbble.com/Wangoi" target='_blank'><img src="/Dribble icon.png" alt="dribble" className='footerIcon' /></a>
            <a href="https://github.com/R-Wangui" target='_blank'><img src="/Github icon.png" alt="github" className='footerIcon' /></a>
            <a href="https://www.linkedin.com/in/wangui-njoroge-639378181/" target='_blank'><img src="/Linkedin icon.png" alt="linkedin" className='footerIcon' /></a>
          </div>
          
        </div>
    </>
  )
}

export default Footer