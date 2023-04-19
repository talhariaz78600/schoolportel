import React from 'react'
import { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/portels/portelContext';

function Allstudentinfo() {
    const host=useNavigate();
    const use = useContext(noteContext);
    const { fetchallstudent, alls,singlestudent } = use;
    useEffect(() => {
        fetchallstudent();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
    return (
        <div style={{ backgroundColor: "#EEECEC" }}>
            <Navbar />
            <div className="container" >
                <div className="row" >


                    <table className="table table-bordered border-primary" style={{ marginTop: "100px" }}>
                        <thead>
                            <tr>
                                <th scope="col">RollNO</th>
                                <th scope="col">Name</th>
                                <th scope="col">Fathername</th>
                                <th scope="col">Class</th>
                            </tr>
                        </thead>
                        {
                            alls.map((alls) => {
                               
                                 return < tbody key={alls._id} style={{cursor:"pointer"}} onClick={()=>{
                                    localStorage.setItem('studentid',alls._id);
                                    localStorage.setItem('studentroll',alls.studentrollno)
                                    singlestudent(); host('/singlestudent')}}>
                                    <tr>
                                        <th scope="row">{alls.studentrollno}</th>
                                        <td>{alls.studentname}</td>
                                        <td>{alls.fathername}</td>
                                        <td>{alls.studentclass}</td>
                                    </tr>



                                </tbody>



                                




                            })
                        }

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Allstudentinfo;

