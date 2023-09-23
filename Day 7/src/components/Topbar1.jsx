import React from 'react'
import logo from '../assets/images/logo1.png'
import { Link } from 'react-router-dom'


const Topbar1 = () => {
    
  return (
    <div class="nav-container circleBehind">
      <div className='logo1'>
        <img src={logo}/>
        </div>
      
        <a href='#aboutme' >ABOUT US</a>
  
        <a href='#register'>CONTACT</a>
        <a href='#'>LOGIN</a>
  
    </div>
  )
}

export default Topbar1
