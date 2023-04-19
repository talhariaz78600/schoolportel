import React from 'react'
import { Link } from 'react-router-dom';
import schoollogo from './images/schoollogo.jpg';
import schoolheader from './images/schoolheader.jpg';
function NavbarSchool() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col p-0">
                    <img className='w-100 p-0' style={{height:"100px"}} src={schoolheader} alt="" />
                </div>
            </div>
        </div>
       <nav className="navbar navbar-expand-lg  sticky-top border" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
            
            <Link className="navbar-brand d-none p-0 m-0 d-lg-block" to="/">
              <img src={schoollogo} className='rounded-circle' alt="" style={{height:"40px",width:"60px"}} />
            </Link>
            <h6 className='text-white d-none mt-2 px-2 d-lg-block'>Bright Star</h6>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            

            <div className="collapse navbar-collapse m-0" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                    <li className="nav-item">
                        <Link className="nav-link click-scroll p-0" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll p-0" to="/">Aboutus</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll p-0" to="/">Admission</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll p-0" to="/">Events</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll p-0" to="/portel">Portel</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link click-scroll p-0" to="/schoolcontact">Contactus</Link>
                    </li>
                </ul>

                
            </div>
        </div>
    </nav>
    </div>
  )
}

export default NavbarSchool
