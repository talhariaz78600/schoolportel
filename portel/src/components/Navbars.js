import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom';
function Navbars() {
    const host =useNavigate();
    let location = useLocation();
    const teacherlogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('tokenstu');
        host('/studentlogin')
    }
    return (
        <div >
            <div className='' >
                <div className="container-fluid fixed-top" >
                    <div className="row ">
                        <div className="col-md-3 col-12 border bg-light order-md-1">
                            <div className="navbar">
                                <h3 className='m-auto text-primary'>Student</h3>

                            </div>
                        </div>

                        <div id="navbar" className="col-6 d-block d-md-none navbar bg-light ">


                            
                                <span className="float-left m-4 " data-toggle="collapse" data-target="#navebar"><i className="fa-sharp fa-solid fa-bars mt-2 text-primary" style={{fontSize:"28px"}}></i></span>
                            

                        </div>
                        <div className="col-6 col-md-4 d-flex navbar m-0 justify-content-end bg-light order-md-3">
                            {!localStorage.getItem('tokenstu') ? <div>

                            </div> : <div>
                            
                            <i className="fa-solid fa-share-from-square   m-2 text-primary" style={{cursor:"pointer",fontSize:"25px"}} onClick={teacherlogout}></i>


                            </div>
                            }
                        </div>

                        <div className="col-6 col-md-5 bg-light order-md-2 p-0 mt-1">
                            <div className="navbar navbar-expand-md p-0">

                                <div className="collapse navbar-collapse  w-100 p-0" id="navebar">

                                    <ul className="navbar-nav text-center">
                                        <li className="nav-item">
                                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} text-primary m-1`} aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link  ${location.pathname === "/studentprofile" ? "active" : ""} text-primary m-1 `} to="/studentprofile">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link  ${location.pathname === "/studentresult" ? "active" : ""} text-primary m-1`} to="/studentresult">Result</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link  ${location.pathname === "/studentattendence" ? "active" : ""} text-primary m-1`} to="/studentattendence">Attendance</Link>
                                        </li>
                                        

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbars