import React from 'react'
import { useContext, useEffect } from 'react';
import noteContext from '../context/portels/portelContext';
import Navbars from './Navbars';
function Studentresult() {
    const use = useContext(noteContext);
    const { subjectres, studentdata,fetchresult } = use;
    let totalmark = 0;
    let total = 0;
    useEffect(() => {
        studentdata();
        setTimeout(() => {
            
            fetchresult();
        }, 1000);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    return (
        <div>
            <Navbars />
            <div className="container">
                <div className="row" >
                    <h4 className='text-center' style={{ marginTop: "150px" }}>Result</h4>

                    <table className="table table-bordered border-primary" style={{ marginTop: "20px" }}>
                        <thead>
                            <tr>
                                <th scope="col">Subject</th>
                                <th scope="col">Marks</th>
                                <th scope="col">Total marks</th>
                                <th scope="col">%</th>
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

                                        <td className='d-none'>{(total = total + subjectres.marks)}{(totalmark = totalmark + subjectres.totalmarks)}</td>
                                    </tr>











                                })
                            }
                            <tr>
                                <th className='text-center'>Total</th>
                                <td className='text-center'>{total}</td>
                                <td className='text-center'>{totalmark}</td>
                                <td className='text-center'>{(total * 100 / totalmark).toFixed(2)}%</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Studentresult;
