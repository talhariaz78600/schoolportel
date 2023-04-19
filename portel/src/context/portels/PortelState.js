
import noteContext from "./portelContext";
import { useState } from "react";
const PortelState = (props) => {
  const [admind, admindata] = useState({});
  const [teacherd,teacherdata]=useState({})
  const [allt, allteacher] = useState([]);
  const [alls, alllstudent] = useState([]);
  const [singles, sstudent] = useState({});
  const [studentc, studentclass] = useState([]);
  const [atend,attendS]=useState([]);
  const [subjectres,resul]=useState([]);
  const [studentd,datastudent]=useState({});
  const [fff,fristpp]=useState({});
  const [active, actives] = useState([]);
  
  // const local = "http://localhost:4000";
  const local="";

  ///////////////////////////////Create  a student///////////////////////////
  const createstudent = async (studentname, fathername, studentclass, phoneno, studentrollno, email, password, host) => {
    if (localStorage.getItem('ttoken')) {
      const response = await fetch(`${local}/api/student/createstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ studentname, fathername, studentclass, phoneno, studentrollno, email, password })
      })
      const res = await response.json();

      if (res.messages) {
        alert(res.messages);
      }
      else if (res.success === true) {
        alert("Admission success")
        host('/allstudent')
      }
      else {

        if (res.Err) {
          alert("Student already have this Roll No ,please change this Roll No")
        }


      }
    }
  }


  ///////////////////////////////Create  a teacher///////////////////////////
  const createteacher = async (teachername, idcard, inchargeclass, post, phoneno, email, password, host) => {
    if (localStorage.getItem('ttoken')) {
      const response = await fetch(`${local}/api/teacher/createteacher`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ teachername, idcard, inchargeclass, post, phoneno, email, password })
      })
      const res = await response.json();

      if (res.messages) {
        alert(res.messages);
      }
      else if (res.success === true) {
        alert("Add a teacher successfull")
        host('/allteacherinfo')
      }
      else {

          alert(res.error);
        


      }
    }
  }

  ////////////////////////////this is login Admin function////////////////////
  const loginadmin = async (adminname, email, password, idcard, host) => {
    const response = await fetch(`${local}/api/admin/adminlogin`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

      },

      body: JSON.stringify({ adminname, email, password, idcard })
    });
    const json = await response.json();
    if (json.success === true) {
      //redirect
      host('/admininfo');
      localStorage.setItem('ttoken', json.authtoken)
      setTimeout(() => {

        fetchadmin();
        fetchallteacher();
      }, 3000);



    }
    else {
      alert("please enter valid data")
    }
  }


  ///////////////////////This is fetchuser function //////////////////////////////
  const fetchadmin = async () => {
    const response = await fetch(`${local}/api/admin/fetchadmin`, {
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem('ttoken')
      },
      body: JSON.stringify()
    })
    const data = await response.json();

    admindata(data);
    localStorage.setItem("fast", data.head)

  }
  /////////////////////////////////////delete student ////////////////////////
  const deletestudent = async (id) => {
    await fetch(`${local}/api/student/deletestudent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
  }


  ///////////////////////////fetch all teacher///////////////////////////////////////////
  const fetchallteacher = async () => {
    const response = await fetch(`${local}/api/teacher/fetchallteacher`, {
      method: "GET",
      headers: {
        "post": localStorage.getItem('fast')
      },
      body: JSON.stringify()
    })
    const data = await response.json();
    allteacher(data.allteacher);

    // fetchallstudent();
  }
  //////////////////////////Delete teacher///////////////////////////////
  const deleteteacher = async (teacherid) => {
    console.log("delete teacher sucessfull of thi id " + teacherid);
    const Notede = allt.filter((allt) => {
      return allt._id !== teacherid;
    })
    allteacher(Notede);
    await fetch(`${local}/api/teacher/deleteteacher/${teacherid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify()
    })

  }
  /////////////////////////////////////////fetchallstudent///////////////////////////////
  const fetchallstudent = async () => {
    const response = await fetch(`${local}/api/student/fetchallstudent`, {
      method: "GET",
      headers: {
        "studentclass": localStorage.getItem('class'),
        "Content-Type": "application/json"
      },
      body: JSON.stringify()

    })
    const data = await response.json();
    alllstudent(data.allstudent);
  }
  ///////////////////////////////////update teacher data ///////////////////////////////////////
  // const { teachername, idcard, post, inchargeclass, phoneno, email, password } = req.body;
  const updateteacher = async (id, teachername, idcard, post, inchargeclass, phoneno, email, password) => {
    await fetch(`${local}/api/teacher/updateteacherdata/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ teachername, idcard, post, inchargeclass, phoneno, email, password })
    })

  }
  const singlestudent = async () => {
    const response = await fetch(`${local}/api/student/singlestudent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Id": localStorage.getItem('studentid')
      },
      body: JSON.stringify()

    })
    const json = await response.json();
    sstudent(json.user);

  }
  /////////////////////////////update the data of student ///////////////////////////////
  //  const { } = req.body;
  const updatestudent = async (studentname, fathername, studentclass, rollno, phoneno, email, password, id) => {
    await fetch(`${local}/api/student/updatestudentdata/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ studentname, fathername, studentclass, rollno, phoneno, email, password })
    })
  }
  //////////////////////////////////////////////////////Login teacher/////////////////////////////////////////////////////////
  const teacherlogin=async(email,password,idcard,host)=>{
   const  response= await fetch(`${local}/api/teacher/teacherlogin`,{
      method: "POST",

      headers: {
        "Content-Type": "application/json",

      },

      body: JSON.stringify({email, password, idcard })
    })
    const res= await response.json();
    
  
    if(res.success===true){
      localStorage.setItem('sttoken',res.authtoken)
      host('/teacherprofile')
    }
    else{
      alert(res.error);
    }
  }
  /////////////////////////////////////fetch teacher///////////////////////////
  const fetchteacherdata = async () =>{
    const sesponse =await fetch(`${local}/api/teacher/fetchteacher`,{
        method:"POST",
        headers:{
            "auth-token":localStorage.getItem('sttoken')
           
        },
        body:JSON.stringify()

    })
    const res= await sesponse.json(); 
    teacherdata(res.user);
    localStorage.setItem('cls',res.user.inchargeclass)
}
//////////////////////////////////////////////////////////////////////////////////////////////
const getattendence = async () => {
  
  const response = await fetch(`${local}/api/attendence/fetchattendence`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "studentrollno":localStorage.getItem('studentroll')
    },
    body: JSON.stringify()

  })
  const json = await response.json();
  attendS(json.atend);
}

//////////////////////////////////////////////////////////student class/////////////////////////
const classstudent = async () => {
    const response = await fetch(`${local}/api/student/fetchallstudent`, {
        method: "GET",
        headers: {
            "studentclass": localStorage.getItem('cls'),
            "Content-Type": "application/json"
        },
        body: JSON.stringify()

    })
    const data = await response.json();
    studentclass(data.allstudent);
    localStorage.setItem('name',data.allstudent.studentname);
    localStorage.setItem('roll',data.allstudent.studentrollno);
}


//////////////////////////////////////////Students attendance///////////////////////////////////
const attendance= async(attendence,studentrollno,studentname)=>{
  // getattendence();
  const response= await fetch(`${local}/api/attendence/studentattendence`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({attendence,studentrollno,studentname})
  })
  const res= await response.json();
  if(res.success===true){
    alert('attendence successfull');
  }
  else{
    alert(res.error);
  }
}
////////////////////////////////create result///////////////////////////////////
const result= async(studentname,studentrollno,subject,marks,totalmarks)=>{
  const response= await fetch(`${local}/api/result/createsubject`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({studentname,studentrollno,subject,marks,totalmarks})
  })
  const res= await response.json();
  resul(subjectres.concat(res.att));
  // console.log(res);
}
/////////////////////////////////fetch result//////////////////////////////
const fetchresult=async ()=>{
  const response= await fetch(`${local}/api/result/fetchsubject`,{
    method:"GET",
    headers:{
      "studentrollno":localStorage.getItem('studentroll')
    },
    body:JSON.stringify()
  })
  const res= await response.json();
  resul(res.subjects);
}
/////////////////////////////delete result//////////////////////////////////
const deleteresult= async (id)=>{
   const response= await fetch(`${local}/api/result/deletesubject/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify()
   })
   const res =await response.json();
   console.log(res);

}
///////////////////////////update result///////////////////////////
const updateresult= async(subject,marks,totalmarks,id)=>{
const response= await fetch(`${local}/api/result/updatesubject/${id}`,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({subject,marks,totalmarks})
})
const res= await response.json();
console.log(res);
}
//////////////////////////student login//////////////////////
const studentlogin= async(email,password,host)=>{
 const response= await fetch(`${local}/api/student/studentlogin`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({email,password})
  })
  const res= await response.json();
  console.log(res);
  if(res.success===true){
    host('/studentprofile')
    localStorage.setItem('tokenstu',res.authtokens)
  }
  else{
    alert(res.error);
  }
 
}
////////////////////////////////fetch student data/////////////////////////
const studentdata=async()=>{
  const response= await fetch(`${local}/api/student/fetchstudent`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem('tokenstu')
    },
    body:JSON.stringify()
  })
  const res= await response.json();
  datastudent(res);
  // console.log(res);
  
}
////////////////////////////first page////////////////////////////
const fristpage= async(photof,fristheading,fristpara)=>{
  const response= await fetch(`${local}/api/frist/fristpage`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({photof,fristheading,fristpara})
  })
  const res= await response.json();
 
  fristpp(res.creat);
 
}
////////////////////////////////////
const fetchactivites = async () => {
  const response = await fetch(`${local}/api/frist/getactivites`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify()

  })
  const res = await response.json();
  actives(res.activites);
}
  return (
    <noteContext.Provider value={{active,fetchactivites,fff,fristpage,studentdata,studentd,studentlogin,updateresult,deleteresult,subjectres,fetchresult,result,getattendence,atend,attendance,classstudent,studentc,fetchteacherdata,teacherd,teacherlogin,createteacher, updatestudent, deletestudent, singles, singlestudent, loginadmin, fetchadmin, admind, fetchallteacher, allt, alls, fetchallstudent, deleteteacher, updateteacher, createstudent }} >
      {props.children}
    </noteContext.Provider>
  )
}
export default PortelState;