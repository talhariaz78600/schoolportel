const express = require('express');


const router = express.Router();
const Student = require('../models/Student')
const fetchstudent = require('../middleware/fetchstudent');
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_secret = "Talhaisintelligent";
/////////create a student : Post"/api/student/createstudent"/////////////
router.post('/createstudent', [
  body('studentname', 'password must be atleat 5 character').isLength({ min: 5 }),
  body('fathername', 'password must be atleat 5 character').isLength({ min: 5 }),
  body('studentclass', "student roll no must be atleast 2 character").isLength({ min: 2 }),
  body('studentrollno',"student roll no must be atleast 2 character").isLength({ min: 2 }),
  body('phoneno', "your phone number is short").isLength({ min: 11 }),
  body('email', 'please enter the valid email').isEmail(),
  body('password', 'password must be atleat 5 character').isLength({ min: 5 }),
], async (req, res) => {
   let success=false;
  const errors = validationResult(req);
  const err=errors.array();
  const messages = err.map(obj => obj.msg);
  if (!errors.isEmpty()) {
    
      return res.status(400).json({ messages, errors: errors.array() });
  
  
  }
  try {
    // const numSaltRounds = await bcrypt.genSalt(8);
    // const sacpassword = req.body.password;
    // const Password = await bcrypt.hash(sacpassword, numSaltRounds);
    const student = await Student.create({
      studentname: req.body.studentname,
      fathername: req.body.fathername,
      studentclass: req.body.studentclass,
      studentrollno: req.body.studentrollno,
      phoneno: req.body.phoneno,
      password: req.body.password,
      email: req.body.email,
    })
    success=true;
    const data = {
      student: {
        id: student.id
      }
    }
    var authtokens = jwt.sign(data, JWT_secret);
    res.json({ success,authtokens });
  } catch (error) {
    const err=error.keyValue;
    const Err=err.studentrollno;
    res.status(500).json({Err})
}
}
)

///////////////////login a student:Post"/api/student/studentlogin"//////////////////////////////
router.post('/studentlogin', [
  body('email').isEmail(),
  body('password').exists(),
], async (req, res) => {
  const errors = validationResult(req);
  let success=false;
  if (!errors.isEmpty()) {
    return res.status(400).json({ success,errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    let student = await Student.findOne({email,password });
    if (!student) {
      return res.status(400).json({success, error: "please try to login correct credentals" })
    }
    // const passwordcompare = await bcrypt.compare(password, student.password);
    // if (!passwordcompare) {
    //   return res.status(400).json({ error: "please try to login correct credentals" });
    // }
    const data = {
      student: {
        id: student.id
      }
    }
    success=true;
    var authtokens = jwt.sign(data, JWT_secret);
    res.json({success,authtokens });

  } catch (error) {
    
    res.json({error: errors })
  }

}
)
/////////////////////////////////////Get single user:post:"/api/student/fetchstudent"/////////////////////////////////
router.get('/fetchstudent', fetchstudent, async (req, res) => {

  try {
    const userId = req.student.id;
    const user = await Student.findById(userId).select("-password");
    res.json(user);

  } catch (error) {
    
    res.status(500).send("interval Server error")
  }

})
///////////////////////////////////////Single student in Admin data//////////////////////////////////
router.get('/singlestudent', async (req, res) => {

  try {
    const userId = req.header('Id')
    const user = await Student.findById(userId);
    res.json({user});

  } catch (error) {
  
    res.status(500).send("interval Server error")
  }

})
////////////////////////fetch all student :post:"/api/student/fetchallstudent"///////////////////////
router.get('/fetchallstudent', async (req, res) => {
  try {
    const studentclass = req.header('studentclass');
    let allstudent = await Student.find({ studentclass });
    res.send({ allstudent });
  } catch (error) {

    console.error(error.message);
    res.status(500).send("interval Server error")

  }

})
///////////////////////////Edit the data of the student:put"/api/student/updatestudentdata/id"///////////////
router.put('/updatestudentdata/:id',  async (req, res) => {
  try {
    const { studentname, fathername, studentclass, rollno, phoneno, email, password } = req.body;
    ///create anewnote objects////
    const newData = {};
    if (studentname) { newData.studentname = studentname };
    if (fathername) { newData.fathername = fathername };
    if (studentclass) { newData.studentclass = studentclass };
    if (rollno) { newData.studentrollno = rollno };
    if (phoneno) { newData.phoneno = phoneno };
    if (email) { newData.email = email };
    if (password) { newData.password = password };

    ////////////////Find the note to be updated and updated it/////////////
    let student = await Student.findById(req.params.id);
    if (!student) { return res.status(404).send("not found") }
    
    student = await Student.findByIdAndUpdate(req.params.id, { $set: newData }, { new: true })
    res.json({ student });

  } catch (error) {
    console.log(error, "internal server error")
    res.send(error);
  }

})
///////////////////////////////delete student :delete"/api/student/deletestudent" //////////////////////////////////
router.delete('/deletestudent/:id', async (req, res) => {

  try {
    ////////////////Find the note to be updated and updated it/////////////
    let student = await Student.findById(req.params.id);
    if (!student) { return res.status(404).send("not found") }
    
    student = await Student.findByIdAndDelete(req.params.id)
    res.json({ "student": "student deleted has been successfull" });
  } catch (error) {
    res.error(error, "internal server error");
  }


})


module.exports = router;