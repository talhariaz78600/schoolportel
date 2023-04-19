import React from 'react'
import noteContext from '../context/portels/portelContext';
import { useContext, useEffect } from 'react';
import Navbart from './Navbart';
function Attendance() {

    const use = useContext(noteContext);
    const { fetchteacherdata, classstudent, studentc, attendance } = use;
    useEffect(() => {
        setTimeout(() => {

            fetchteacherdata();
        }, 1000);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    useEffect(() => {
        setTimeout(() => {

            classstudent();
        }, 2000);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
    return (
        <div style={{ backgroundColor: "#EEECEC" }}>
            <Navbart />
            <div className="container" >
                <div className="row" >


                    <table className="table table-bordered border-primary" style={{ marginTop: "100px" }}>
                        <thead>
                            <tr>
                                <th scope="col">RollNO</th>
                                <th scope="col">Name</th>

                                <th scope="col">present</th>
                                <th scope="col">absent</th>
                            </tr>
                        </thead>
                        {
                            studentc.map((studentc) => {

                                return < tbody key={studentc._id}>
                                    <tr>
                                        <th scope="row">{studentc.studentrollno}</th>
                                        <td>{studentc.studentname}</td>
                                        <td className='text-center'><button className='btn btn-primary' onClick={() => { attendance("Yes", studentc.studentrollno, studentc.studentname) }}>P</button></td>
                                        <td className='text-center'><button className='btn btn-success' onClick={() => { attendance("No", studentc.studentrollno, studentc.studentname) }}>A</button></td>
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

export default Attendance
