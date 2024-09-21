import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const NavbarTop = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt='logo' onClick={handleClick} style={{ cursor: 'pointer' }} />
        
        {searchVisible ? (
          <div className="search-div-home" role="search">
            <input className="search-input-home" type="search" placeholder="Enter Courses, Category or Keywords" aria-label="Search" />
            <button className="btn-search-home" onClick={toggleSearch}>
              <IoSearch style={{ fontSize: '2rem' }} />
            </button>
          </div>
        ) : (
          <button className="btn-search-home" onClick={toggleSearch}>
            <IoSearch style={{ fontSize: '2rem' }} />
          </button>
        )}

        <div className="navbar-nav">
          <button className={`nav-item ${activeLink === 'corporate' ? 'active' : ''}`} onClick={() => handleNavClick('corporate')}>
            <Link to='/corporate' className='nav-item-link'>Corporate Training</Link>
          </button>
          <button className={`nav-item ${activeLink === 'course' ? 'active' : ''}`} onClick={() => handleNavClick('course')}>
            <Link to='/course' className='nav-item-link'>Courses</Link>
          </button>
          <button className={`nav-item ${activeLink === 'hire' ? 'active' : ''}`} onClick={() => handleNavClick('hire')}>
            <Link to='#' className='nav-item-link'>Hire from Us</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
