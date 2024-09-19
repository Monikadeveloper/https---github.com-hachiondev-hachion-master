import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import './Home.css';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const NavbarTop = () => {
  const [activeLink, setActiveLink] = useState(null); // State to track active link
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleNavClick = (link) => {
    setActiveLink(link); // Set active link when clicked
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt='logo' onClick={handleClick} style={{ cursor: 'pointer' }} />
         
          <div className="search-div-home" role="search">
            <input className="search-input-home" type="search" placeholder="Enter Courses, Category or Keywords" aria-label="Search" />
            <button className="btn-search-home" type="submit"><IoSearch style={{ fontSize: '2rem' }} /></button>
          </div>

          <div className="navbar-nav">
            <button 
              className={`nav-item ${activeLink === 'corporate' ? 'active' : ''}`}
              onClick={() => handleNavClick('corporate')}>
              <Link to='/corporate' className='nav-item-link'>Corporate Training</Link>
            </button>
            <button 
              className={`nav-item ${activeLink === 'course' ? 'active' : ''}`}
              onClick={() => handleNavClick('course')}>
              <Link to='/course' className='nav-item-link'>Courses</Link>
            </button>
            <button 
              className={`nav-item ${activeLink === 'hire' ? 'active' : ''}`}
              onClick={() => handleNavClick('hire')}>
              <Link to='#' className='nav-item-link'>Hire from us</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
