import React from 'react';
import './Corporate.css';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Carousel } from 'react-bootstrap';
import LearnerCard from './LearnerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'; // Custom Icons

const Learners = () => {
  return (
    <>
      <div className='training-events'>
        <div className='training-events-head'>
          <h1 className='association-head'>Our Learners Speak on QA Automation</h1>
        </div>
        
        <ImQuotesLeft style={{ height: '113.97px', zIndex: '1', width: '148.59px', color: 'rgba(0, 174, 239, 1)', marginBottom: '-8vh' }} />
        <div className='learner-cover'>
        <Carousel
          indicators={true} 
          prevIcon={<FaAngleLeft className="custom-prev-icon" />} 
          nextIcon={<FaAngleRight className="custom-next-icon" />} 
          interval={null} 
        >
          <Carousel.Item>
            <div className='learner-card-item'>
              <LearnerCard
                name='Dhananjay'
                profile='Android app developer'
                location='Canada'
                content='Hachion is a great place for fresher’s can learn good communication skills and subjects in this institute and they will place you according to your talent.'
              />
              <LearnerCard
                name='Henry Lee'
                profile='IOS app developer'
                location='USA'
                content='The best training and placement institute that I came across, created a good platform for achieving my dream as an IOS developer.'
              />
           </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='learner-card-item'>
              <LearnerCard
                name='John Doe'
                profile='Web Developer'
                location='UK'
                content='Excellent learning experience, great instructors, and fantastic career support.'
              />
              <LearnerCard
                name='Jane Smith'
                profile='Data Scientist'
                location='Australia'
                content='The training was comprehensive and the placement support was exceptional.'
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='learner-card-item'>
              <LearnerCard
                name='John Doe'
                profile='Web Developer'
                location='UK'
                content='Excellent learning experience, great instructors, and fantastic career support.'
              />
              <LearnerCard
                name='Jane Smith'
                profile='Data Scientist'
                location='Australia'
                content='The training was comprehensive and the placement support was exceptional.'
              />
            </div>
          </Carousel.Item>
        </Carousel>
        </div>
        <ImQuotesRight style={{ height: '113.97px', zIndex: '1', width: '148.59px', color: 'rgba(0, 174, 239, 1)', marginTop: '-8vh', marginLeft: '90vw' }} />
      </div>
    </>
  );
}

export default Learners;
