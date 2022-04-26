import React from 'react'
import './Services.css'
import HeartImoji from '../../img/heartemoji.png'
import Resume from './resume.pdf'
import { useContext } from "react";
import { themeContext } from '../../Context'
import { Card } from '@material-ui/core'
import {motion} from "framer-motion"
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const software="https://icon-library.com/images/software-icon/software-icon-6.jpg"
  const libraries="https://codingthesmartway.com/wp-content/uploads/2018/12/logo_react.png"
  const lang="https://static.thenounproject.com/png/3040228-200.png"

  const transition={duration:2,type:'spring'}
  return (
    <div className='Services' id='Services' style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>


      <div className='top'>
        <span style={{ color: darkMode ? "white" : "" }}>SKILLS AND <span className='txt' style={{color: darkMode ? "var(--orange)" : ""}}>EXPERTISE</span> </span>

        <a href={Resume} download>
          <button className='button s-button'>Downlaod CV</button>
        </a>
        <div className='blur s-blur' style={{ background: "#abf1ff94" }}></div>
      </div>

      <motion.div className='bottom'
      initial={{top:'-24%'}}
      whileInView={{top:'0rem'}}
      transition={transition}>
        <Card className='card1'
          >
          <img src={lang} alt="" />
          <span>Languages</span>
          <span>JAVA, JavaScript, HTML, CSS, PHP, SQL, XML,Python</span>
        </Card>
        <Card
       
         className='card1'>
          <img src={software} alt="" />
          <span>Software</span>
          <span>Android Studio,MYSQL,Canvas</span>
        </Card>
        <Card className='card1'>
          <img src={libraries} alt="" />
          <span>Libraries</span>
          <span>Node.js, React.js,Mongoose, Express.js</span>
        </Card>
      </motion.div>

    </div>
  )
}

export default Services
