import React from 'react'
import Navbar from './Navbar';
import { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/portels/portelContext';
function Allstudent() {
    const use = useContext(noteContext);
    const { fetchallteacher, allt } = use;
    const host=useNavigate();
    useEffect(() => {
        fetchallteacher();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
   
    
    return (
        <div>
            <Navbar/>
            <div className="container-fluid" style={{ backgroundColor: "#EEECEC" ,height:"570px"}}>
                <div className="row" >
                <div style={{marginTop:"120px"}}>
                    <h3 className='text-center my-4'>All classes</h3>
                    {
                        allt.map((allt) => {
                            return <div key={allt.inchargeclass}   className="col-8 m-auto" onClick={()=>{
                                localStorage.setItem('class',allt.inchargeclass);
                                host('/allstudentinfo')
                            }} >
                                <h4 className='text-center mt-3 border py-2 rounded' style={{cursor:"pointer",backgroundColor:"#BD746A"}}>{allt.inchargeclass}</h4>
                            </div>
                        })
                    }

                </div>


                </div>
            </div>
        </div>
    )
}

export default Allstudent;
