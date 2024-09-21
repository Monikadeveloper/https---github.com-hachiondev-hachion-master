import React from 'react'
import Topbar from './Topbar'
import NavbarTop from './NavbarTop'
import './Blogs.css';
import aboutUsBanner from '../../Assets/AboutusBanner (2).png';
import {MdKeyboardArrowRight} from 'react-icons/md';
import aboutUsSider from '../../Assets/aboutussider.png';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiStudentLight } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { GrDocumentVerified } from "react-icons/gr";
import visionImage from '../../Assets/OurVision.png';
import Learners from './Learners';
import StickyBar from './StickyBar';
import Footer from './Footer';
import FlexibleLearning from '../../Assets/FlexibleLearning.png';
import Success from '../../Assets/Success.png';
import Assistance from '../../Assets/Assistance.png';
import careerSupport from '../../Assets/careerSupport.png';
import handsOnLearning from '../../Assets/handsonLearning.png';
import onlineTeaching from '../../Assets/onlineTeaching.png';

const Aboutus = () => {
  return (<>
  <Topbar/>
  <NavbarTop/>
  <div className='about-banner'>
<img src={aboutUsBanner} alt='about-us'/>
  </div>
  <div className='about-us'>
  <p>Home <MdKeyboardArrowRight/> About Us</p>
<div className='about-us-content'>
    <h1 className='about-us-heading'>About us</h1>
    <div className='about-us-top'>
        <p className='about-us-left-content'>Hachion is an organization that has been set up with the purpose of bridging the gap between graduates and corporate. In terms of entry or multi level seniority the industry has been transforming very quickly. Traditional and conventional hiring practices are becoming obsolete in the dynamic economic conditions globally. Corporate have been benefiting from our Just-In-Time skilled resource pool which can be deployed and be market ready in just a few days than the campus pool being hired in the conventional method. Our content and delivery methodology adopt the best practices followed by the industry which focuses on equipping students with the necessary skills to succeed.</p>
        <img src={aboutUsSider} alt=''/>
    </div>
    <p className='about-us-left-content'>Our placement services focus on providing extensive end-to- end services as per the customized requirement of our clients enabling them to get the right candidates by helping them to save the time and resources. Identifying and sourcing candidates from our extensive network of clients and candidates who are engaged in similar business related to our clients as well as usage of various platforms enable us to find the right candidates at a quicker time frame along with the right fit to the requisite profile. We believe that the key to effective service is to truly understand from the client requirements, operations and their philosophies by engaging them as partners.</p>
    <h1 className='about-us-heading'>Our Story</h1>
    <div className='our-story'>
        <div className='story-div'>
  <HiOutlineUserGroup className='story-icon'/>
  <p className='number'>88,000</p>
<p className='story-content'> Foreign Followers</p>
        </div>
        <div className='story-div'>
  <PiStudentLight className='story-icon'/>
  <p className='number'>4789</p>
<p className='story-content'> Students Enrolled</p>
        </div>
        <div className='story-div'>
  <MdContacts className='story-icon'/>
  <p className='number'>96</p>
<p className='story-content'> Certified Teachers</p>
        </div>
        <div className='story-div'>
  <GrDocumentVerified className='story-icon'/>
  <p className='number'>488</p>
<p className='story-content'> Complete Courses</p>
        </div>
    </div>
   
    <h1 className='about-us-heading'>Our Vision</h1>
    <div className='about-us-top'>
        <p className='about-us-left-content'>Our Vision is to synergize the “right talent” with the “right requirement” and to see that quality manpower is constructively and appropriately channelized. To help talented and specialized individuals in building their own career and to ensure our clients find employees according to their specific requirements is a constant driving force in line with our vision. As a part of our mission we are aligned with various institutions from various regions aided by our expansive network to fetch formerly unexposed talents and avail them to our reputed clients.</p>
        <img src={visionImage} alt=''/>
    
    </div>
    <h1 className='about-us-heading'>Why to choose Hachion ? </h1>

    <p className='about-us-left-content'>Hachion offers you the flexibility to learn anytime, anywhere with instructor-led online training programs. With expert guidance and a hands-on approach, our courses ensure career growth and job placement support. We also provide 24/7 assistance to guarantee a seamless learning experience.</p>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
<div className='about-us-div-content'>
    <img src={FlexibleLearning} alt=''/>
    <h6>Flexible Learning</h6>
    <p>Online Training accessible at your convenience</p>
</div>
<div className='about-us-div-content'>
    <img src={onlineTeaching} alt=''/>
    <h6>Expert Instructor</h6>
    <p>Industries professionals delivering valueable content</p>
</div>
</div>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
<div className='about-us-div-content'>
    <img src={handsOnLearning} alt=''/>
    <h6>Hands-On Learning</h6>
    <p>Practical classes with easy-to-follow material.</p>
</div>
<div className='about-us-div-content'>
    <img src={careerSupport} alt=''/>
    <h6>Career Support</h6>
    <p>Assistance with CVs, interviews, and job placement.</p>
</div>
</div>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
<div className='about-us-div-content'>
    <img src={Assistance} alt=''/>
    <h6>24/7 support</h6>
    <p>Continuous support through online chat and phone.</p>
</div>
<div className='about-us-div-content'>
    <img src={Success} alt=''/>
    <h6>Proven Success</h6>
    <p>Positive feedback from participants and successful outcomes.</p>
</div>
</div>
</div>

  </div>
  <Learners/>
  <Footer/>
  <StickyBar/>
  </>
  )
}

export default Aboutus