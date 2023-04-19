import React from 'react'
import { useEffect, useContext } from 'react';
import noteContext from '../context/portels/portelContext';
import image from './images/logo.jpg';
import Navbars from './Navbars';
function Studentprofile() {
    const use = useContext(noteContext)
    const { studentdata, studentd } = use;
    useEffect(() => {
        studentdata();
        localStorage.setItem('studentrollno', studentd.studentrollno)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
    return (
        <div className='' style={{ backgroundColor: "#EEECEC", height: "700px" }}>
            <Navbars />
            <div className="container" >
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-md-10 m-auto " >
                        <div className="card shadow-lg rounded-3" style={{ marginTop: "170px" }}>
                            <div className="row g-0" >
                                <div className="col-12 col-md-3 d-flex justify-content-center">
                                    <img src={image} className="img-fluid rounded-start border m-auto w-100" style={{ height: "170px" }} alt="" />
                                </div>
                                <div className="col-sm-9">
                                    <div className="card-body mt-md-3" style={{ height: "" }}>
                                        <p className="card-text  mt-1 fw-bold">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{studentd.studentname}</p>
                                        <p className="card-text  mt-1 fw-bold">Fathername:&nbsp;{studentd.fathername}</p>
                                        <p className="card-text mt-1">Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{studentd.studentclass}</p>
                                        <p className="card-text mt-1">Rollno:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {studentd.studentrollno}</p>
                                        <p className="card-text mt-1">Mobile No: &nbsp;&nbsp;&nbsp;&nbsp;{studentd.phoneno}</p>
                                        <p className=" mt-1">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {studentd.email}</p>
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

export default Studentprofile;
