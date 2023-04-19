import React from 'react'
import {useNavigate } from 'react-router-dom';
import NavbarSchool from './NavbarSchool';
function Home() {
    const host=useNavigate();
    const add=()=>{
        if(!localStorage.getItem('ttoken')){
            host('/admin');

        }
        else{
            host('/profile');
        }
        
    }
    const stud=()=>{
        if(!localStorage.getItem('tokenstu')){
            host('/studentlogin');

        }
        else{
            host('/studentprofile');
        }
        
    }
    
    const teach=()=>{
        if(!localStorage.getItem('sttoken')){
            host('/teacherlogin');

        }
        else{
            host('/teacherprofile');
        }
        
    }

  return (
    <div>
        <NavbarSchool/>
      <div className="container-fluid" style={{height:"550px",backgroundColor:"#084C61"}}>
        
        <div className="row">
            <div className="col mt-5">
                <h3 className='text-center text-white mt-3'>The Bright Start Public School</h3>
            </div>
        </div>
        <div className="row pt-3 d-flex justify-content-center mt-2">
            <div className="col-md-5 mt-5">
            <button className='btn btn-primary w-100' onClick={stud}>Student portel</button>
            </div>
        </div>
        <div className="row pt-3 d-flex justify-content-center">
            <div className="col-md-5 ">
            <button className='btn btn-primary w-100' onClick={teach}>Teacher portel</button>
            </div>
        </div>
        <div className="row pt-3 d-flex justify-content-center">
            <div className="col-md-5 ">
            <button className='btn btn-primary w-100' onClick={add}> Admin</button>
            </div>
        </div>
      </div>
      <div className="container-fluid border" style={{ backgroundColor: "black" }}>
                <div className="row">
                    <div className="col ">
                        <p className='text-white text-center py-1'>© 2023 All rights reserved. The Bright Star Public Scool - Powered By Talha Riaz</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home;
