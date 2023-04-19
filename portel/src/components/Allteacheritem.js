import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/portels/portelContext';
const Teacheritem = (props) => {
    const use=useContext(noteContext);
    const {deleteteacher}=use;
    return (
        <div>
            <div className="card  mt-4">
                <div className="card-body border shadow-lg text-md-center">
                    <p className="card-title fs-6 fw-bold">Name: {props.allt.teachername}</p>
                    <p className="card-text fs-6">Idcard No: {props.allt.idcard}</p>
                    <p className="card-text fs-6">Phone No: {props.allt.phoneno}</p>
                    <p className="card-text fs-6">Email: {props.allt.email}</p>
                    <p className="card-text fs-6">Incharge Class: {props.allt.inchargeclass}</p>
                    <i className="fa-solid fa-trash-can mx-2 text-primary" style={{cursor:"pointer"}} onClick={()=>{deleteteacher(props.allt._id);}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2 text-primary" style={{cursor:"pointer"}} onClick={()=>{props.edit(props.allt);}}></i>
                </div>

            </div>
        </div>
    )
}

export default Teacheritem;
