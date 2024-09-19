import React from 'react';
import './Course.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Corporate = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/corporate', { replace: true });
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <div className="corporate">
        <div className="corporate-content">
          <RiDoubleQuotesL className="quote-left" />
          <p className="corporate-para">
            Enhance Your Team's Skills Explore Our <span className="corporate-para-span">Corporate Training</span> Options
          </p>
          <RiDoubleQuotesR className="quote-right" />
        </div>
        <button className="know-more" onClick={handleKnowMoreClick}>
          Know More
        </button>
      </div>
    </>
  );
};

export default Corporate;
