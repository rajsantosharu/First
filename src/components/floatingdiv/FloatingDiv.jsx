import React from 'react'
import  './FloatingDiv.css'
import { useContext } from "react";
import { themeContext } from '../../Context';
const FloatingDiv = ({image,text1,text2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='floatingdiv'  style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
       <img src={image}/>
       <span>
          {text1}<br />
          {text2}
       </span>
    </div>
  )
}

export default FloatingDiv
