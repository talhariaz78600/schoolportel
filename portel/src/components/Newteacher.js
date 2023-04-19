import React from 'react'
import { useState,useContext } from 'react';
import noteContext from '../context/portels/portelContext';
import { useNavigate } from 'react-router-dom';
function Newteacher() {
    const back=()=>{
        host('/allteacherinfo')
    }
    const use=useContext(noteContext);
    const host=useNavigate();
    const {createteacher}=use;
    const [studentA,studentAdmission]=useState({name:"",idcard:"",inchargeclass:"",post:"",phoneno:"",email:"",password:""}); 
    const onchange=(e)=>{
        studentAdmission({...studentA,[e.target.name]:e.target.value});

    }
    const onsubmit=(e)=>{
        e.preventDefault();
            
            createteacher(studentA.name,studentA.idcard,studentA.inchargeclass,studentA.post,studentA.phoneno,studentA.email,studentA.password,host);
        

    }
  return (
    <div>
    <div className="container-fluid" style={{backgroundColor:"#EEECEC"}}>
    <i className="fa-solid fa-left-long m-3  p-2 border text-primary shadow-lg" onClick={back} style={{fontSize:"25px",cursor:"pointer"}}></i>
        <div className="row" >
            <div className="col-md-10 m-auto">
                <h3 className='text-center' style={{marginTop:"35px"}}>Teacher Form</h3>
                <form onSubmit={onsubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="name"> Name</label>
                        <input type="value" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onchange} placeholder="Enter name" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="idcard">Idcard No</label>
                        <input type="value" className="form-control" id="idcard" name='idcard'  onChange={onchange} placeholder="Enter Idcard" />
                        
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="inchargeclass">InchargeClass</label>
                        <input type="value" className="form-control" id="inchargeclass" name='inchargeclass' onChange={onchange} placeholder="Enter class" />
                        
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="phoneno">Mobile No</label>
                        <input type="value" className="form-control" id="phoneno" name='phoneno' onChange={onchange} placeholder="Enter Mobile No" />
                    
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="post">Post</label>
                        <input type="value" className="form-control" id="post" name='post' aria-describedby="emailHelp" onChange={onchange} placeholder="Enter post" />
                        
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

export default Newteacher;
