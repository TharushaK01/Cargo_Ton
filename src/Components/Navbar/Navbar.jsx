import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import downArrow from '../../assets/down-arrow.png';


const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <input type="checkbox" id="hamburger-toggle" className="hamburger-checkbox" />
         <label htmlFor="hamburger-toggle" className="hamburger container">
          <span></span>
          <span></span>
          <span></span>
         </label>
        <ul>
            <li className="nav-item">Home<img src={downArrow} alt='' className='downArrow'/></li>
            <li className="nav-item">Pages<img src={downArrow} alt='' className='downArrow'/></li>
            <li className="nav-item">Tracking</li>
            <li className="nav-item">Services<img src={downArrow} alt='' className='downArrow'/></li>
            <li className="nav-item">Blog<img src={downArrow} alt='' className='downArrow'/></li>
            <li><button className='btn'>Get a Quote</button></li>
            <li><button className='btn1'>SignIn</button></li>
        </ul>

    </nav>
  )
}

export default Navbar