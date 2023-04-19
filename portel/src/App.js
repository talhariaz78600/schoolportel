
import './App.css';
// import Navbar from './components/Navbar';
// import About from './components/About';
import Home from './components/Home';
import Addmin from './components/Addmin';
import Admininfo from './components/Admininfo';
import PortelState from './context/portels/PortelState';
import AllTeacherinfo from './components/AllTeacherinfo';
import Allstudent from './components/Allstudent';
import Admission from './components/Admission';
import Singlestudent from './components/Singlestudent';
import Newteacher from './components/Newteacher';
import Teacherlogin from './components/Teacherlogin';
import Teacherprofile from './components/Teacherprofile';
import Classstudent from './components/Classstudent';
import Studentt from './components/Student_t';
import Attendance from './components/Attendance';
import Studentlogin from './components/Studentlogin';
import Studentprofile from './components/Studentprofile';
import Studentattendence from './components/Studentattendence';
import Studentresult from './components/Studentresult';
import School from './components/School';
import SchoolContact from './components/SchoolContact';
import Fristpage from './components/Fristpage';
// import NavbarSchool from './components/NavbarSchool';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Allstudentinfo from './components/Allstudentinfo';


function App() {
  return (

    <div>
      <PortelState>
        <Router>

          

          <Routes>
          <Route exact path="/" element={<Fristpage />}></Route>
            <Route exact path="/portel" element={<Home />}></Route>
            <Route exact path="/admin" element={<Addmin />}></Route>
            <Route exact path="/admininfo" element={<Admininfo />}></Route>
            <Route exact path="/profile" element={<Admininfo />}></Route>
            <Route exact path="/allteacherinfo" element={<AllTeacherinfo />}></Route>
            <Route exact path="/allstudent" element={<Allstudent />}></Route>
            <Route exact path="/allstudentinfo" element={<Allstudentinfo />}></Route>
            <Route exact path="/admission" element={<Admission />}></Route>
            <Route exact path="/singlestudent" element={<Singlestudent />}></Route>
            <Route exact path="/createteacher" element={<Newteacher />}></Route>
            <Route exact path="/teacherlogin" element={<Teacherlogin />}></Route>
            <Route exact path="/teacherprofile" element={<Teacherprofile />}></Route>
            <Route exact path="/classstudent" element={<Classstudent />}></Route>
            <Route exact path="/attendance" element={<Attendance />}></Route>
            <Route exact path="/student_t" element={<Studentt />}></Route>
            <Route exact path="/studentlogin" element={<Studentlogin />}></Route>
            <Route exact path="/studentprofile" element={<Studentprofile />}></Route>
            <Route exact path="/studentattendence" element={<Studentattendence />}></Route>
            <Route exact path="/studentresult" element={<Studentresult />}></Route>
            <Route exact path="/school" element={<School />}></Route>
            <Route exact path="/schoolcontact" element={<SchoolContact />}></Route>

          </Routes>
        </Router>

      </PortelState>



    </div>


  );
}

export default App;
