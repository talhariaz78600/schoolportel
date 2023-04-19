import React from 'react';

import noteContext from '../context/portels/portelContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';


function Singlestudent() {
    let total=0;
    let totalmark=0;

    const use=useContext(noteContext);
    const {singles,singlestudent,deletestudent,updatestudent,fetchresult,deleteresult,subjectres,updateresult ,atend, getattendence}=use;

    const [upd, update] = useState({ subject: "", marks: "", totalmarks: "",id:"" });

    const ed=(current)=>{
        re.current.click();
        update({subject:current.subject,marks:current.marks,totalmarks:current.totalmarks,id:current._id})
    }
    const onhange = (e) => {
        update({ ...upd, [e.target.name]: e.target.value })
    }
    const updatesubject=(e)=>{
        e.preventDefault();
        updateresult(upd.subject,upd.marks,upd.totalmarks,upd.id)
        fetchresult();

    }
    const re = useRef(null);

    const host=useNavigate();
    useEffect(() => {
        singlestudent();
        fetchresult();
        getattendence()
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
    const back=(e)=>{
        e.preventDefault();
        host('/allstudentinfo')

    }


    const [datat, datateacher] = useState({  studentname: "", fathername: "", studentclass: "", studentrollno: "", phoneno: "", email: "", password: "" ,id: ""})
    const ref = useRef(null);
    
    const edit = (currentdata) => {
        datateacher({  studentname: currentdata.studentname, fathername: currentdata.fathername, studentclass: currentdata.studentclass, studentrollno: currentdata.studentrollno, phoneno: currentdata.phoneno, email: currentdata.email, password: currentdata.password,id: currentdata._id })
        ref.current.click();
    }
    const handleclick = (e) => {
        e.preventDefault();
       
        updatestudent( datat.studentname, datat.fathername, datat.studentclass, datat.studentrollno, datat.phoneno, datat.email, datat.password,datat.id,)
        setTimeout(() => {
            singlestudent();
            
        }, 1000);
    }
    const onChange = (e) => {
        datateacher({ ...datat, [e.target.name]: e.target.value })
    }
    return (
        <div style={{ backgroundColor: "#EEECEC" }}>
 {/* ///////////////////////////////For Result edit/////////////////////////// */}

 <button type="button" className="btn btn-primary d-none" ref={re} data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    <label htmlFor="stubject" className="col-sm-2 col-form-label">Subject</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="subject" name='subject' value={upd.subject} onChange={onhange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="marks" className="col-sm-2 col-form-label">Marks</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="marks" name='marks' value={upd.marks} onChange={onhange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="totalmarks" className="col-sm-2 col-form-label">Totalmarks</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="totalmarks" name='totalmarks' value={upd.totalmarks} onChange={onhange} />
                                    </div>
                                </div>



                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="close" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={updatesubject} >update</button>
                        </div>
                    </div>
                </div>
            </div>



        {/* /////////////////////////////for profile edit///////////////// */}
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModall">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="studentname" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="studentname" name='studentname' value={datat.studentname} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="fathername" className="col-sm-2 col-form-label">Fathername</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="fathername" name='fathername' value={datat.fathername} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="post" className="col-sm-2 col-form-label">class</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="studentclass" name='studentclass' value={datat.studentclass} onChange={onChange} />
                                    </div>
                                </div>
                                {/* <div className="row mb-3">
                                    <label htmlFor="studentrollno" className="col-sm-2 col-form-label">Roll No</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="studentrollno" name='studentrollno' value={datat.studentrollno} onChange={onChange} />
                                    </div>
                                </div> */}
                                <div className="row mb-3">
                                    <label htmlFor="idcard" className="col-sm-2 col-form-label">phoneno</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="phoneno" name='phoneno' value={datat.phoneno} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-12">
                                        <input type="email" className="form-control" id="email" name='email' value={datat.email} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                                    <div className="col-sm-12">
                                        <input type="value" className="form-control" id="password" name='password' value={datat.password} onChange={onChange} />
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

            <div className="container">
                <i className="fa-solid fa-left-long m-3  p-2 border text-primary shadow-lg" onClick={back} style={{fontSize:"25px",cursor:"pointer"}}></i>
                <div className="row m-auto">
                    <div className="col-md-8" style={{marginTop:"70px"}}>

                        <div className="card m-auto">
                            <div className="card-body border shadow-lg">
                                <p className="card-title fs-6 fw-bold">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.studentname}</p>
                                <p className="card-text fs-6">Fathername:&nbsp;{singles.fathername}</p>
                                <p className="card-text fs-6">Phone No:&nbsp;&nbsp;&nbsp;&nbsp;{singles.phoneno}</p>
                                <p className="card-text fs-6">Roll No :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.studentrollno} </p>
                                <p className="card-text fs-6">Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.studentclass}</p>
                                <p className="card-text fs-6">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.email}</p>
                                <p className="card-text fs-6">Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.password}</p>
                                <i className="fa-solid fa-trash-can mx-2 text-primary" style={{ cursor: "pointer" }} onClick={()=>{deletestudent(singles._id); host('/allstudentinfo')}} ></i>
                                <i className="fa-solid fa-pen-to-square mx-2 text-primary" style={{ cursor: "pointer" }} onClick={()=>{edit(singles)}}></i>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" >
                    <h4 className='text-center mt-5'>Result</h4>

                    <table className="table table-bordered border-primary" style={{ marginTop: "10px" }}>
                        <thead>
                            <tr>
                                <th scope="col">Subject</th>
                                <th scope="col">Marks</th>
                                <th scope="col">Total marks</th>
                                <th scope="col">%</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        < tbody >
                            {
                                subjectres.map((subjectres) => {

                                    return <tr key={subjectres._id} style={{ cursor: "pointer" }} >
                                        <th scope="row">{subjectres.subject}</th>
                                        <td>{subjectres.marks}</td>
                                        <td>{subjectres.totalmarks}</td>
                                        <td>{(subjectres.marks * 100 / subjectres.totalmarks).toFixed(2)}%</td>
                                        <td className='text-center'>
                                            <i className="fa-solid fa-trash-can mx-2 text-primary" style={{ cursor: "pointer" }} onClick={() => {
                                                deleteresult(subjectres._id); setTimeout(() => {

                                                    fetchresult();
                                                }, 2000);
                                            }} ></i>
                                            <i className="fa-solid fa-pen-to-square mx-2 text-primary" onClick={()=>{ ed(subjectres)}} style={{ cursor: "pointer" }}></i>
                                        </td>
                                        <td className='d-none'>{(total = total + subjectres.marks)}{(totalmark = totalmark + subjectres.totalmarks)}</td>
                                    </tr>











                                })
                            }
                            <tr>
                                <th className='text-center'>Total</th>
                                <td className='text-center'>{total}</td>
                                <td className='text-center'>{totalmark}</td>
                                <td className='text-center'>{(total * 100 / totalmark).toFixed(2)}%</td>
                                <td className='text-center'></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
            <div className="container" >
                <div className="row" >


                    <div className="col-md-8">

                        <table className="table table-bordered border-primary" style={{ marginTop: "50px", }}>
                            <thead>
                                <tr>
                                    <th scope="col" className='text-center'>Date</th>
                                    <th scope="col" className='text-center'>Attendence</th>

                                </tr>
                            </thead>
                            {
                                atend.map((atend) => {
                                    return < tbody key={atend._id} >
                                        <tr >

                                            <th scope="row">{atend.date.slice(0, 10)}</th>
                                            <td>{atend.attendence}</td>

                                        </tr>



                                    </tbody>








                                })
                            }

                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Singlestudent
