import React from 'react'
import { useState,useContext } from 'react';
import noteContext from '../context/portels/portelContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function Admission() {
    const use=useContext(noteContext);
    const host=useNavigate();
    const {createstudent}=use;
    const [studentA,studentAdmission]=useState({name:"",fathername:"",class:"",phoneno:"",studentrollno:"",email:"",password:""}); 
    const onchange=(e)=>{
        studentAdmission({...studentA,[e.target.name]:e.target.value});

    }
    const onsubmit=(e)=>{
        e.preventDefault();
            
            createstudent(studentA.name,studentA.fathername,studentA.class,studentA.phoneno,studentA.studentrollno,studentA.email,studentA.password,host)
        

    }
    return (
        <div>
            <Navbar/>
            <div className="container-fluid" style={{backgroundColor:"#EEECEC"}}>
                <div className="row" >
                    <div className="col-md-10 m-auto">
                        <h3 className='text-center' style={{marginTop:"120px"}}>Student Admission Form</h3>
                        <form onSubmit={onsubmit}>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Student Name</label>
                                <input type="value" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onchange} placeholder="Enter name" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="fathername">Father Name</label>
                                <input type="value" className="form-control" id="fathername" name='fathername'  onChange={onchange} placeholder="Enter Father name" />
                                
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="class">Class</label>
                                <input type="value" className="form-control" id="class" name='class' onChange={onchange} placeholder="Enter class" />
                                
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="phoneno">Mobile No</label>
                                <input type="value" className="form-control" id="phoneno" name='phoneno' onChange={onchange} placeholder="Enter Mobile No" />
                            
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="studentrollno">Roll No</label>
                                <input type="value" className="form-control" id="studentrollno" name='studentrollno' aria-describedby="emailHelp" onChange={onchange} placeholder="Enter name" />
                                
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name='email'  onChange={onchange} placeholder="Enter email" />
                                
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"  name='password' onChange={onchange} placeholder="Password" />
                            </div>

                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admission;
