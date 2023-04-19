import React from 'react'
import { useContext, useEffect, useState, useRef } from 'react';
import noteContext from '../context/portels/portelContext';
import { useNavigate } from 'react-router-dom';
function Student_t() {
    const host = useNavigate();
    let total = 0;
    let totalmark = 0;
    const [res, resultt] = useState({ subject: "", marks: "", totalmarks: "" })
    const [upd, update] = useState({ subject: "", marks: "", totalmarks: "",id:"" });
    const back = () => {
        host('/classstudent');
    }

    const use = useContext(noteContext);
    const { subjectres, atend, getattendence, singles, singlestudent, result, fetchresult, deleteresult,updateresult } = use;
    const ref = useRef(null);
    const onchange = (e) => {
        resultt({ ...res, [e.target.name]: e.target.value })

    }
    const submit = (e) => {
        e.preventDefault();
        result(singles.studentname, singles.studentrollno, res.subject, res.marks, res.totalmarks);

    }
    const edit=(current)=>{
        ref.current.click();
        update({subject:current.subject,marks:current.marks,totalmarks:current.totalmarks,id:current._id})
    }


    useEffect(() => {


        getattendence();


        singlestudent();
        fetchresult();

        // eslint-disable-next-line
    }, [])


    const onChange = (e) => {
        update({ ...upd, [e.target.name]: e.target.value })
    }
    const updatesubject=(e)=>{
        e.preventDefault();
        updateresult(upd.subject,upd.marks,upd.totalmarks,upd.id)
        fetchresult();

    }
    return (

        <div style={{ backgroundColor: "#EEECEC" }}>


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
                                    <label htmlFor="stubject" className="col-sm-2 col-form-label">Subject</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="subject" name='subject' value={upd.subject} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="marks" className="col-sm-2 col-form-label">Marks</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="marks" name='marks' value={upd.marks} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="totalmarks" className="col-sm-2 col-form-label">Totalmarks</label>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="totalmarks" name='totalmarks' value={upd.totalmarks} onChange={onChange} />
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




            <div className="container">
                <i className="fa-solid fa-left-long m-3  p-2 border text-primary shadow-lg" onClick={back} style={{ fontSize: "25px", cursor: "pointer" }}></i>
                <div className="row">
                    <div className="col-md-8 m-auto mb-5">
                        <div className="card">
                            <div className="card-body">
                                <p className='card-text fw-bold'>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.studentname}</p>
                                <p className='card-text'>Father name:&nbsp;&nbsp;&nbsp;&nbsp;{singles.fathername}</p>
                                <p className='card-text'>Roll No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{singles.studentrollno}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h4 className='text-center'>Enter the results</h4>
                    <div className="col-12 mt-5">
                        <form onSubmit={submit} className="row gx-3 gy-2 align-items-center">
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter subject name" onChange={onchange} />
                            </div>
                            <div className="col-sm-3">
                                <input type="number" className="form-control" id="marks" name="marks" placeholder="Enter marks" onChange={onchange} />
                            </div>
                            <div className="col-sm-3">
                                <input type="number" className="form-control" id="totalmarks" name="totalmarks" placeholder="Enter Total marks" onChange={onchange} />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
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
                                            <i className="fa-solid fa-pen-to-square mx-2 text-primary" onClick={()=>{ edit(subjectres)}} style={{ cursor: "pointer" }}></i>
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

export default Student_t;
