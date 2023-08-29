import React from 'react'
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";

import img1 from "../img/icons8-email-100.png";
import img2 from "../img/icons8-phone-100.png"
import img3 from "../img/icons8-message-32.png"
import img4 from "../img/icons8-address-96.png"

import {RiYoutubeFill} from "react-icons/ri"
import {FaInstagram} from "react-icons/fa"
import {AiOutlineLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'></img>
                <h2 className='mb-0 text-white'>Sign up for news letter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your email adress" aria-label="Your email adress" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            {/* <div className='col-4'>
              <h4 className='text-white mb-4'>E-MAILS</h4>
              <div>
                <p style={{color:"white"}}>
                  Home : 277 Near Sonar Goria High school<br/>
                  Pincode: 713404 
                </p>
                <a href='tel:+91 7908104094' className='mt-3 d-block mb-1 text-white'> +91 7908104094</a>
                <a href='mailto:souravbhukta8@gmail.com' className='mt-2 d-block mb-0 text-white'> souravbhukta8@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-3'>
                  <a className='text-white' href='/'> <BsLinkedin/></a>
                  <a className='text-white' href='/'> <BsInstagram/></a>
                  <a className='text-white' href='/'> <BsGithub/></a>
                  <a className='text-white' href='/'> <BsYoutube/></a>
                </div>
              </div>
            </div> */}

            <div className="d-flex align-items-center justify-content-center m-3" style={{ justifyContent: "space-around", width: "100%" }}>

              <div className="d-flex align-items-center justify-content-center m-3" style={{ justifyContent: "space-around", width: "100%" }}>
                <img src={img1} alt="Email Icon" height={"70vh"} />
                <div className=" m-3">
                  <h4 className='text-white'>E-MAILS:</h4>
                  <p className='text-white'><a href="mailto:info@example.com" >info@example.com</a></p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center m-3" style={{ justifyContent: "space-around", width: "100%" }}>
                <img src={img2} alt="Phone Icon" height={"70vh"} />
                <div className=" m-3">
                  <h4 className='text-white'>PHONE:</h4>
                  <p className='text-white'><a>+1 1234567890 / +1 1234567890</a></p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center m-3" style={{ justifyContent: "space-around", width: "100%" }}>
                <img src={img3} alt="Support Icon" height={"70vh"} />
                <div className=" m-3">
                  <h4 className='text-white'>SUPPORT:</h4>
                  <p className='text-white'>Mon-Sat, 8AM-8PM</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-center m-3" style={{ justifyContent: "space-around", width: "100%" }} >
                <img src={img4} alt="Address Icon" height={"70vh"} />
                <div className="m-3">
                  <h4 className='text-white'>ADDRESS:</h4>
                  <p className='text-white'>123 Main Street, City, State, ZIP Code</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <h3 className='text-white fw-bold'>DUMPING DATA</h3>
              <h5 className='text-white'>Unlocking Global Opportunities</h5>

            </div>

            {/* <div color='m-3 w-50 bg-primary'>
              
              
            </div> */}


            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
              <p className='text-white'>An established organization,Dumping Data is expanding quickly with</p>
              
              <p className='text-white'>its sights set on becoming a global player in the Data industry.</p>
            </div>

            <div className=' d-flex align-items-center justify-content-center m-5'>
              <AiOutlineLinkedin  className='fs-3 text-primary m-3'/>
              <FaInstagram  className='fs-3 text-danger m-3'/>
              <RiYoutubeFill className='fs-3 text-warning m-3'/>
            </div>

          </div>
        </div>
      </footer>


      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy: {new Date().getFullYear()} Powerd by Dumping Data</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
