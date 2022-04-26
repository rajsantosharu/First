import React from 'react'
import './Experience.css';
import { Card, Divider } from '@material-ui/core'
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const logo="https://play-lh.googleusercontent.com/iJT-OpqICMuTeBXwURxWFYcdkrvG9TlPT1YAh-oSdV56UUyK9DuRBQAXTA3HSVjp_w=s180-rw"
  return (
     <div className="Experience">
       <div className="heading">
         <span>Work Experience</span>
        <img src={logo} alt="" />
         <span>Deoghar Online Services | <span style={{color:"var(--orange)"}}> Startup</span></span>
       </div>
       <div className="work">
         <span>• Developed an android app for online food services which delivers food at the doorstep, especially for Deoghar (Jharkhand)
              which gained around 2000 downloads on Google Play Store.</span>

          <span>• Expanded its services to the city of Sasaram and developed another app named Sasaram Online Services</span>    
          <span>• The overall management and working of both the services were managed entirely by me, which involved tying up with
              different restaurants and food outlets and managing the delivery system.</span>
       </div>
     </div>
  )
}

export default Experience
