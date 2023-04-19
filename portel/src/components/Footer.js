import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div>
            {/* #023047 */}

            <div className="container-fluid" style={{ backgroundColor: "black" }}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center">
                        <h4 className='text-center my-4 text-white'>About</h4>
                        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ex consectetur in error quidem ipsam? Ratione soluta eum at laudantium quis consequuntur dignissimos ea maiores porro fuga officia mollitia debitis, aliquam repellendus assumenda in non. In, accusantium.</p>
                        <a href="https://www.facebook.com/talha.riaz.9889/"><i className="fa fa-facebook text-white mt-4 fs-2" style={{height: "100px", width: "100px"}}></i></a>
                        <a href="https://www.instagram.com/talhariaz_7860/"><i className="fa fa-instagram text-white fs-2" style={{height: "100px", width: "100px"}}> </i></a>
                        <Link to="/"><i className="fa fa-twitter  text-white fs-2" style={{height: "100px", width: "100px"}}></i></Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-2">
                        <h4 className='text-center my-4 text-white'>Quick links</h4>
                        <div className=" navbar-nav nav list-group mx-5 text-center">
                            <li className="nav-item ">
                                <Link className="nav-link click-scroll pt-0" to="/">Aboutus</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll pt-2" to="/">Admission</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll pt-2" to="/">Events</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll pt-2" to="/portel">Portel</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll pt-2 mb-4" to="/schoolcontact">Contactus</Link>
                            </li>

                        </div>

                    </div>
                     <div className="col-lg-4 col-md-6">
                     <h4 className='text-center my-4 text-white'>Contact</h4>
                     <i className="fa-brands fa-whatsapp text-white fs-4 mt-4"></i><span className='text-white'>&nbsp;&nbsp;whatsapp:&nbsp;&nbsp;&nbsp; 03472916962</span><br />
                     <i className="fa fa-envelope-open-o fs-4 text-white mt-4" aria-hidden="true"></i><span className='text-white'>&nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;muhammadtalha10005@gmail.com</span>
                     <br /><i className="fa-solid fa-phone text-white fs-4 mt-4"></i><span className='text-white'>&nbsp;&nbsp;Mobile No:&nbsp;&nbsp;03472916962</span><br />
                    <p className='text-white mt-4'>Address:&nbsp;&nbsp; District Layyah Chak No 105TDA</p>
                    </div>

                </div>
            </div>
            <div className="container-fluid border" style={{ backgroundColor: "black" }}>
                <div className="row">
                    <div className="col ">
                        <p className='text-white py-1 text-center'>© 2023 All rights reserved. The Bright Star Public Scool - Powered By Talha Riaz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
