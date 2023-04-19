import React, { useState,useContext } from 'react'
import noteContext from '../context/portels/portelContext';
import { useNavigate } from 'react-router-dom';

function Addmin() {
    const host=useNavigate();
  
   const context = useContext(noteContext);
   const {loginadmin}=context;
    const [adminv,adminf]=useState({adminname:"",idcard:"",email:"",password:""});
    const onchange=(e)=>{
        e.preventDefault();
        adminf({...adminv,[e.target.name]:e.target.value});

    }
    const onclick= async(e)=>{
        e.preventDefault();
        loginadmin(adminv.adminname,adminv.email,adminv.password,adminv.idcard,host)
    
    
    }
  return (
   <div>
         <div className="container-fluid" style={{backgroundColor:"#084C61",height:"750px"}}>
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-5 ">
                        <div className="container" style={{border:"2px solid black", borderRadius: "9px",marginTop:"80px", backgroundColor: "#084C61", height: "350px"}}>
                            <div className="row">
                                <div className="col-md-12 p-0 bg-primary text-center rounded-3">
                                    <div>
                                        <h3>Admin</h3>
                                    </div>
                                </div>
            
                                <div className="col-md-12 pt-1">
                                    <form action="" onSubmit={onclick}>

                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control  mt-1" name="adminname" id="adminname" placeholder="Enter admin name" onChange={onchange}/>
                                        <input type="text" className="form-control mt-1" name="idcard" id="idcard" placeholder="Enter id" onChange={onchange}/>
                                        <input type="email" className="form-control mt-1" name="email" id="email" placeholder="Enter  email" onChange={onchange} />
                                        <input type="password" className="form-control  mt-1" name="password" id="password" placeholder="Enter password" onChange={onchange}/>
                                        <button type='submit' className="btn  btn-primary mt-3 w-100" >Submit</button>
                                    </div>
                                    </form>
                                    {/* <!-- <div className="d-grid gap-2  mx-auto">
                                        <button className="btn  btn-lg btn-primary my-2"> login</button>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div> 
      
    </div>
  )
}

export default Addmin
