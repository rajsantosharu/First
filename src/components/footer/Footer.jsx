import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
       <img src={Wave} style={{width:"100%"}} />
       <div className="f-content">
           <span >santoshran90068@gmail.com</span>
           <div className="f-icon">
             <Instagram className="first" color="white" size="2rem" />
             <Linkedin className="second" color="white" size="2rem"  />
             <Github className="third" color="white"  size="2rem" />
           </div>
       </div>
    </div>
  )
}

export default Footer
