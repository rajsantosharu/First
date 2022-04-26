import React from 'react'
import './Card.css'
import { useContext } from "react";
import { themeContext } from '../../Context';
const Card = ({emoji,heading,details}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card' style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
       <img src={emoji} alt="" />
       <span>{heading}</span>
       <span>{details}</span>
       
    </div>
  )
}

export default Card
