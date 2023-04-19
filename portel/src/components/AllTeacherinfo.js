import React from 'react'
import Teacher from './Teacher'
import Navbar from './Navbar';
import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import portelContext from '../context/portels/portelContext';
function AllTeacherinfo() {
    const host =useNavigate();
    const [datat, datateacher] = useState({ id: "", teachername: "", idcardno: "", post: "", inchargeclass: "", phoneno: "", email: "", password: "" })
    const user = useContext(portelContext);
    const { allt, fetchallteacher, updateteacher } = user;
    const edit = (currentdata) => {
        datateacher({ id: currentdata._id, teachername: currentdata.teachername, idcardno: currentdata.idcard, post: currentdata.post, inchargeclass: currentdata.inchargeclass, phoneno: currentdata.phoneno, email: currentdata.email, password: currentdata.password })
        ref.current.click();
    }
    const handleclick = (e) => {
        e.preventDefault();
        updateteacher(datat.id, datat.teachername, datat.idcardno, datat.post, datat.inchargeclass, datat.phoneno, datat.email, datat.password)
        setTimeout(() => {
            
            fetchallteacher();
        }, 2000);
        
    }
    const onChange = (e) => {
        datateacher({ ...datat, [e.target.name]: e.target.value })
    }
    const ref = useRef(null);
    useEffect(() => {
        fetchallteacher();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);


    const newt=()=>{
        host('/createteacher')
    }


    return (
        <div>
            <Navbar />

            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="teachername" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="teachername" name='teachername' value={datat.teachername} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="idcard" className="col-sm-2 col-form-label">Idcard</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="idcardno" name='idcardno' value={datat.idcardno} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="post" className="col-sm-2 col-form-label">post</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="post" name='post' value={datat.post} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inchargeclass" className="col-sm-2 col-form-label">Inchargeclass</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="inchargeclass" name='inchargeclass' value={datat.inchargeclass} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="idcard" className="col-sm-2 col-form-label">phoneno</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="phoneno" name='phoneno' value={datat.phoneno} onChange={onChange} />
                                    </div>
                                </div>
                                
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="close" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclick}>update</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid" style={{ backgroundColor: "#EEECEC" }}>
                <div className="row mt-5">
                    <h1 className='text-center' style={{ marginTop: "100px" }}>All Teacher in School</h1>
                    {
                        allt.map((allt) => {
                            return <Teacher key={allt._id} allt={allt} edit={edit} />
                        })
                    }
                    <div className="col-md-8 m-auto">

                    <button className='btn btn-primary my-3 w-100' onClick={newt} >Add a new teacher</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTeacherinfo
