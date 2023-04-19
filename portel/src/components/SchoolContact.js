import React from 'react';
import NavbarSchool from './NavbarSchool';
function SchoolContact() {
    return (
        <div>
            <NavbarSchool />
            <div className="container-fluid mt-5" style={{ height: "500px" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="text-center mb-4">Contact Us</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid border" style={{ backgroundColor: "black" }}>
                <div className="row m-0">
                    <div className="col-12">
                        <p className='text-white text-center'>© 2023 All rights reserved. The Bright Star Public Scool - Powered By Talha Riaz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolContact
