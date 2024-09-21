import React from 'react'
import Topbar from './Topbar'
import { Navbar } from 'react-bootstrap'
import NavbarTop from './NavbarTop'
import contactUsBanner from '../../Assets/contactus.png';
import {MdKeyboardArrowRight} from 'react-icons/md';
import UsaFlag from '../../Assets/USA.png';
import './Blogs.css';
import indiaFlag from '../../Assets/IndiaFlag.png';
import dubaiFlag from '../../Assets/DubaiFlag.png';
import whatsappIcon from '../../Assets/logos_whatsapp-icon.png';
import mailIcon from '../../Assets/uiw_mail.png';
import facebookIcon from '../../Assets/facebook_symbol.svg.png';
import twitter from '../../Assets/twitter.png';
import linkedin from '../../Assets/linkedin.png';
import instagram from '../../Assets/instagram.png';
import quora from '../../Assets/Component 141.png';
import Footer from './Footer';
import StickyBar from './StickyBar';

const ContactUs = () => {
  return (
   <>
   <Topbar/>
   <NavbarTop/>
   <div className='about-banner'>
<img src={contactUsBanner} alt='contact-us-banner'/>
  </div>
  <div className='contact-us-all'>
  <p>Home <MdKeyboardArrowRight/> Contact Us</p>
  <h1 className='about-us-heading'>Office Location</h1>
 
<div className='contact-us'>
    <div className='contact-us-div'>
        <h3>Head Quarters</h3>
        <div style={{display:'flex', flexDirection:'row',padding:'2vh',justifyContent:'space-evenly'}}>
            <img src={UsaFlag} alt='usa'/>
            <div className='office-location'>
                <p>New Jersey, USA</p>
                <p>HACH Technologies 239 US Highway 22 green Brook Township,
New Jersey USA,
ZIP 08812.</p>
            </div>
        </div>
    </div>
    
    <div className='contact-us-div'>
        <div style={{display:'flex', flexDirection:'row',padding:'2vh',paddingTop:'8vh', justifyContent:'space-evenly'}}>
            <img src={indiaFlag} alt='usa'/>
            <div className='office-location'>
                <p>Hyderabad, India</p>
                <p>HACH Technologies GP Rao Enclaves, 301, 3rd floor
Road No 3 KPHB colony,
Hyderabad 500072.</p>
            </div>
        </div>
    </div>
    <div className='contact-us-div'>
        <div style={{display:'flex', flexDirection:'row',padding:'2vh', paddingTop:'8vh',justifyContent:'space-evenly'}}>
            <img src={dubaiFlag} alt='usa'/>
            <div className='office-location'>
                <p>Dubai, UAE</p>
                <p>Sports City
                Dubai UAE</p>
            </div>
        </div>
    </div>
    </div>
    <div className='contact-us-bottom-div'>
    <div className='contact-us-left'>
  <h3>Enquiries</h3>
  <div className='contact-block'>
    <img src={whatsappIcon} alt='whatsapp-icon'/>
    <p className='contact-info'> +91 9490323388</p>
  </div>
  <div className='contact-block'>
    <img src={mailIcon} alt='mail-icon'/>
    <p className='contact-info'>trainings@hachion.co</p>
  </div>
  <div className='contact-us-icon'>
    <img src={facebookIcon} alt='facebook-icon'/>
    <img src={twitter} alt='twitter-icon'/>
    <img src={linkedin} alt='linkedin-icon'/>
    <img src={instagram} alt='instagram-icon'/>
    <img src={quora} alt='quora-icon'/>
  </div>
    </div>
<div className='contact-us-right'>
<div className='contact-us-right-header'>
<p>Get in touch with us</p>

</div>
<form className='contact-form'>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Id</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your emailid"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="mb-3">
<button type="button" class="submit-button">Submit</button>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
  By clicking on Submit, you acknowledge read our Privacy Notice
  </label>
  </div>
  
</div>
</form>
</div>
</div>
</div>
<Footer/>
<StickyBar/>
   </>
  )
}

export default ContactUs
