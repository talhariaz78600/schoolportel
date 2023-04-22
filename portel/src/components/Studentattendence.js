import React from 'react'
import noteContext from '../context/portels/portelContext';
import { useContext,useEffect } from 'react';
import Navbars from './Navbars';
function Studentattendence() {
    const use=useContext(noteContext);
    const {atend,studentdata,getattendence}=use;
    useEffect(() => {
     studentdata();
     setTimeout(() => {
         getattendence();
         
     }, 1000);
     // eslint-disable-next-line
    }, []);

  return (
    <div>
        <Navbars/>
      <div className="container" >
                <div className="row" >


                    <div className="col-md-8">

                        <table className="table table-bordered border-primary" style={{ marginTop: "150px", marginBottom:"40px"}}>
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

export default Studentattendence
