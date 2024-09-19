import React, { useState } from 'react';
import { PiLineVerticalThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import whatsapp from '../../Assets/logos_whatsapp-icon.png';
import './Home.css';
import { Link } from 'react-router-dom';
import {IoLogOut} from 'react-icons/io5';
import profile1 from '../../Assets/profile1.jfif';

const Topbar = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
   
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className='topbar'>
        <div className='topbar-left'>
          <p className='query-content'>Have any query ?</p>
          <div className='whatsapp'>
            <img src={whatsapp} alt='whatsapp-icon' className='whatsapp-icon' />
            <p className='whatsapp-number'> +91 9490323388</p>
            <PiLineVerticalThin style={{ color: 'white', fontSize: '2rem' }} />
          </div>
          <div className='training-mail'>
            <IoIosMail className='training-mail-icon' />
            <p className='training-email'>trainings@hachion.co</p>
          </div>
        </div>

        {/* Conditional Rendering Based on Login Status */}
        {isLoggedIn ? (
          <>
          <div className='logout-right'>          <button className='logout-btn'><IoLogOut style={{fontSize:'2rem',gap:'0.5vh'}}/>Logout</button>
          <div className='user-info'>
            <div className="btn-group">
              <button type="button" className="btn btn-logout dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <div className='image-block'>
                  <img src={profile1} alt='user' />
                </div>
                Hachion
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </div>
          </div>

          </> ) : (
          <div className='login-div'>
            <Link to='/login' className='login-link-home'>
              <button className='login-div-content'>Login</button>
            </Link>
            <PiLineVerticalThin style={{ color: 'white', fontSize: '2rem' }} />
            <Link to='/register' className='login-link-home'>
              <button className='login-div-content'>Register</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
