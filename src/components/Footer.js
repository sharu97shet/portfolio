import React from 'react'
import '../footer.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";



const Footer = () => {

 return (
   
<>
<div className='footer'>
<div className="content">
                    <div className="top">
                        <div className="logo-details">
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                           
                        </div>
                        <div className="media-icons">
                            <a href="#"><i > <FaFacebookF/> </i></a>
                            <a href="#"><i > <FaTwitter/> </i> </a>
                            <a href="https://www.instagram.com/thapatechnical/" target="_blank"><i > <FaInstagram/>  </i></a>
                            <a href="#"><i > <FaLinkedinIn /> </i></a>
                            <a href="#"><i > <FaYoutube />  </i></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><a href="#">App Development</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Backend Development</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">React Js</a></li>
                            <li><a href="#">NoSQL</a></li>
                        </ul>
                        {/* <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul> */}
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text"> Copyright © 2023
                            <a href="/>"> Moviflix</a> All rights reserved </span>
                        <span className="policy_terms">
                          <a href="/">Privacy policy</a>
                          <a href="/">Terms & condition</a>
                        </span>
                    </div>
                </div>

                </div>
</>

 )
}

export default Footer