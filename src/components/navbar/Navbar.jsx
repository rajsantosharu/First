import React from 'react'
import Toggle from '../toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>

        <Toggle />
        <a href="https://www.linkedin.com/in/santosh-kumar-01ab76218/" target="_blank"> <button className='button'>Hire me</button></a>
      </div>
      <div className='n-right'>
        <div className="n-list">
          <ul style={{ listStyleType: "none", cursor: "pointer" }}>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}  >
              <li>Skills</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}  >
              <li>Experiences</li>
            </Link>

            <Link spy={true} to='Testimonials' smooth={true}  >
              <li>Projects</li>
            </Link>




          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
          <button className='button n-btn'>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
