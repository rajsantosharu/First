import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkdin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../floatingdiv/FloatingDiv.jsx';
import { useContext } from "react";
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'
const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition={duration:2,type:'spring'}
    return (
        <div className='intro' style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}>
            <div className="intro-left">
                <div className="intro-name">
                    <span style={{color: darkMode ? "white" : ""}}>Hi ! I Am</span>
                    <span>Santosh</span>
                    <span style={{color: darkMode ? "white" : ""}}> <span style={
                        {color:"#fb4570",fontWeight:"bold", fontSize:"1.3rem",fontFamily:"sans-serif"}}>Full Stack Developer </span> with best experience in web development
                    </span>
                    <span style={{color: darkMode ? "white" : ""}}>Third-Year Undergraduate Student </span>
                    <span style={{color: darkMode ? "white" : ""}}>Department of Mining Engineering</span>
                    <span style={{color: darkMode ? "white" : ""}}>Indian Institute of Technology, Kharagpur</span>
                </div>
              
                <div className="intro-icon">
                   <a href="https://github.com/santosharuraj" target="_blank">
                   <img src={Github} />
                   </a>
                    <img src={Linkdin} />
                    <img src={Instagram} />
                </div>
            </div>
            <div className="intro-right">
                <img src={Vector1} />
                <img src={Vector2} />
                <img src={boy} />
                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                 src={glassesimoji} />
                <motion.div
                 initial={{top:"-4%",left:"84%"}}
                 whileInView={{left:"68%"}}
                 transition={transition}
                 style={{top:"-4%" ,left:"68%"}}
                 className="floating-div1">
                    <FloatingDiv image={Crown} text1='MERN' text2='Developer'/>
                </motion.div>
                <motion.div
                initial={{left:'-4%'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                 style={{top:"69%" ,left:'0rem' }}
                 className="floating-div2">
                    <FloatingDiv image={thumbup} text1='Frontend' text2='Developer'/>
                </motion.div>

                <div className='blur' style={{background:"rgb(238 210 255)"}}>

                </div>
                <div className='blur' style={{
                    background:"#c1f5ff",
                    top:'17rem',
                    width:"21rem",
                    height:"11rem",
                    left:"-9rem"}}>

                </div>
            </div>

        </div>
    )
}

export default Intro
