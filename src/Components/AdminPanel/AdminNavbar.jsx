import React from 'react';
import './Admin.css';
import logo from '../../Assets/image 133.png';
import { RiMenuUnfold3Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import ProfileImage from '../../Assets/profile1.jfif';


const AdminNavbar = () => {
  return (
   <>
   <div className='admin-nav'>
     <img src={logo} alt='logo' />
     <div className='admin-nav-middle'>
       <RiMenuUnfold3Line style={{color:'white',fontSize:'2rem',marginTop:'1.25vh'}}/>
       <div className="search-div" role="search">
         <input className="search-input" type="search" placeholder="Enter Courses, Category or Keywords" aria-label="Search" />
         <button className="btn-search" type="submit"><IoSearch style={{ fontSize: '2rem' }} /></button>
       </div>
     </div>
     <div className='admin-nav-right'>
       <div className='icon-container'>
         <BsEnvelopeFill style={{color:'#00AEEF',fontSize:'2rem'}}/>
       </div>
       <div className='icon-container'>
         <IoMdNotifications style={{color:'#00AEEF',fontSize:'2rem'}}/>
       </div>
      
         <div className='user-info'>
         <div class="btn-group">
         <button type="button" class="btn btn-logout dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         <div className='image-block'>
             <img src={ProfileImage} alt='user' />
           </div>Hachion
         </button>
         <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">Dashboard</a></li>
           <li><a className="dropdown-item" href="#">Settings</a></li>
           <li><hr className="dropdown-divider" /></li>
           <li><a className="dropdown-item" href="#">Logout</a></li>
         </ul>
       </div>
       </div>
     </div>
   </div>
   </>
  )
}

export default AdminNavbar;
