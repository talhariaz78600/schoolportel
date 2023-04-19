import React from 'react'
import Navbar from './Navbar';
import { useContext, useEffect } from 'react';
import portelContext from '../context/portels/portelContext';
import image from './images/logo.jpg';
function Admininfo() {
    const user = useContext(portelContext);
    const { admind, fetchadmin } = user;
    useEffect(() => {
        setTimeout(() => {

            fetchadmin();
            

        }, 2000);
    /* eslint-disable react-hooks/exhaustive-deps */
    }, []);


    return (

        <div className='' style={{backgroundColor:"#EEECEC",height:"700px"}}>
            <Navbar />
            <div className="container" >
                <div className="row" style={{height:"100%"}}>
                    <div className="col-10 m-auto " >
                        <div className="card shadow-lg" style={{marginTop:"170px"}}>
                            <div className="row g-0" >
                                <div className="col-12 col-md-3 d-flex justify-content-center">
                                   <img src={image} className="img-fluid rounded-start border mt-1 w-100" style={{height:"170px"}}  alt="" />
                                </div>
                                <div className="col-sm-9">
                                <div className="card-body mt-md-3" style={{height:""}}>
                                <p className="card-text  mt-1">Name:{admind.adminname}</p>
                                <p className=" mt-1">Email: {admind.email}</p>
                                <p className="card-text mt-1">Idcard: {admind.idcard}</p>

                            </div>
                            </div>
                        </div>
                    

                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Admininfo;
