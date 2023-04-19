import React from 'react';
import Navbart from './Navbart';
import { useContext,  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/portels/portelContext';
function Classstudent() {
    const use = useContext(noteContext);
    const host=useNavigate();
    const {fetchteacherdata,classstudent,studentc,getattendence}=use;
    useEffect(() => {

            // setTimeout(() => {
                fetchteacherdata();
                
            // }, 1000);
    
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);
  
    useEffect(() => {
            // setTimeout(() => {
                
                classstudent();
            // }, 3000);

        
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
                                     <th scope="col">Fathername</th>
                                     <th scope="col">Class</th>
                                 </tr>
                             </thead>
                             {
                                 studentc.map((studentc) => {
     
                                     return < tbody key={studentc._id} style={{cursor:"pointer"}} onClick={()=>{
                                             localStorage.setItem('studentroll',studentc.studentrollno)
                                             localStorage.setItem('studentid',studentc._id)
                                             host('/student_t');
                                             getattendence()
                                             }}
                                             >
                                         <tr >
                                             <th scope="row">{studentc.studentrollno}</th>
                                             <td>{studentc.studentname}</td>
                                             <td>{studentc.fathername}</td>
                                             <td>{studentc.studentclass}</td>
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

export default Classstudent;
