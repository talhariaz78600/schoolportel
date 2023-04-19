import React from 'react'
import Navbart from './Navbart';
import { useEffect ,useContext} from 'react';
import noteContext from '../context/portels/portelContext';
import image from './images/logo.jpg';
function Teacherprofile() {
    const use=useContext(noteContext)
    const {fetchteacherdata,teacherd}=use
    useEffect(() => {
        fetchteacherdata();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
  return (
    <div className='' style={{backgroundColor:"#EEECEC",height:"700px"}}>
    <Navbart />
    <div className="container" >
        <div className="row" style={{height:"100%"}}>
            <div className="col-md-10 m-auto " >
                <div className="card shadow-lg rounded-3" style={{marginTop:"170px"}}>
                    <div className="row g-0" >
                        <div className="col-12 col-md-3 d-flex justify-content-center">
                           <img src={image} className="img-fluid rounded-start border m-auto w-100" style={{height:"170px"}}  alt="" />
                        </div>
                        <div className="col-sm-9">
                        <div className="card-body mt-md-3" style={{height:""}}>
                        <p className="card-text  mt-1 fw-bold">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{teacherd.teachername}</p>
                        <p className="card-text mt-1">Inchargeclass: {teacherd.inchargeclass}</p>
                        <p className="card-text mt-1">Idcard:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {teacherd.idcard}</p>
                        <p className="card-text mt-1">Mobile No: &nbsp;&nbsp;&nbsp;&nbsp;{teacherd.phoneno}</p>
                        <p className=" mt-1">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {teacherd.email}</p>
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

export default Teacherprofile;
