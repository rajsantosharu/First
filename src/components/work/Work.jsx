import React from 'react'
import './Work.css'
import Amazon from '../../img/amazon.png'
import fb from '../../img/Facebook.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const uthan="https://yt3.ggpht.com/Vqw8UgaIoMQMLTJVud2gmR9ryzyKzYOyI8ea0SZl2gIcoeU73LE0Q_V2RGbMtWrWAmqr_0P9rw=s900-c-k-c0x00ffffff-no-rj"
  const dos="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupUNOs6WZS0mHT9LbIAUvTO7HBAEazbdH1g&usqp=CAU"
  const bos="https://play-lh.googleusercontent.com/8qSHphZGQXeT_adaJxue8mL4f3Rstwx4mZjdG4PRPyseKdAs9cNgvjD6SNjAJbNoW5k=s180-rw"
  const breaking="https://breakingnewsapp.herokuapp.com/iconlogo.png"
  return (
    <div className='work' style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <div className='sev-left' >
       <span style={{color: darkMode ? "white" : ""}}>Projects Worked</span>
       <span >Short &amp; Glance</span>
       <span style={{color: darkMode ? "white" : ""}}>Working on the different type of porjects got more experience in the field of development</span>
       <button className='button s-button'>Hire me</button>
       <div className='blur s-blur' style={{background:"#abf1ff94"}}></div>
      </div>
      <div className="sev-right">
          <div className="mainCircle">
              <div className="secCircle">
                  <img src={uthan} alt="" />
              </div>
              <div className="secCircle">
                  <img src={dos} alt="" />
              </div>
              <div className="secCircle">
                  <img src={bos} alt="" />
              </div>
              <div className="secCircle">
                  <img src={breaking} alt="" />
              </div>

              <div className="secCircle">
                  <span>Projects</span>
              </div>
          </div>

          <div className="backCircle blueCircle"> </div>
          <div className="backCircle yellowCircle"> </div>
      </div>
    </div>
  )
}

export default Work
