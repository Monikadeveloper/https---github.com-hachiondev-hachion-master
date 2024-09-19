import React, { useState } from 'react';
import './Course.css';
import { PiLineVerticalThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import whatsapp from '../../Assets/logos_whatsapp-icon.png';
import HaveAnyQuery from './HaveAnyQuery';

const StickyBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="sticky-bar">
        <div className="contact-info">
          <p className='query-content'>Have any query ?</p>
          <div className='whatsapp'>
            <img src={whatsapp} alt='whatsapp-icon' style={{height:'30px',width:'30px'}}/>
            <p className='whatsapp-number'> +91 9490323388</p>
            <PiLineVerticalThin style={{color:'white',fontSize:'2rem'}}/>
          </div>
          <div className='training-mail'>
            <IoIosMail style={{color:'white',fontSize:'2rem',marginRight:'1vh'}}/>
            <p className='training-email'>trainings@hachion.co</p>
          </div>
        </div>
        <button className="contact-button" onClick={openModal}>Contact Us</button>
      </div>

      {isModalOpen && <HaveAnyQuery closeModal={closeModal} />}
    </>
  );
};

export default StickyBar;
