const express = require('express');
const fetchteacher = require('../middleware/fetchstudent')
const router = express.Router();
const Teacher = require('../models/Teacher')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_secret = "Talhaisintelligent";
//////////////////create a Teacher:Post"/api/teacher/createteacher"//////////////
router.post('/createteacher', [
  body('teachername', 'teacherrname must be atleat 5 character').isLength({ min: 5 }),
  body('idcard', 'password must be atleat 13 character').isLength({ min: 13 }),
  body('inchargeclass').isLength({ min: 2 }),
  body('post').isLength({ min: 2 }),
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
    const numSaltRounds = await bcrypt.genSalt(8);
    const sacpassword = req.body.password;
    const Password = await bcrypt.hash(sacpassword, numSaltRounds);
    const teacher = await Teacher.create({
      teachername: req.body.teachername,
      idcard: req.body.idcard,
      inchargeclass: req.body.inchargeclass,
      post: req.body.post,
      phoneno: req.body.phoneno,
      password: Password,
      email: req.body.email,
    })
    const data = {
      teacher: {
        id: teacher.id
      }
    }
    success=true;
    var authtokent = jwt.sign(data, JWT_secret);
    res.json({success, authtokent });
  } catch (error) {
    console.error(error.message);
    res.json({ error: "please enter the valid credential" })
  }
}
)



//////////////Routes 3 :update  the notes using: Get "/api/teacher/updateteacherdata/. Login required"///////
router.put('/updateteacherdata/:id', async (req, res) => {
  const { teachername, idcard, post, inchargeclass, phoneno, email, password } = req.body;
  ///create anewnote objects////
  const newData = {};
  if (teachername) { newData.teachername = teachername };
  if (idcard) { newData.idcard = idcard };
  if (post) { newData.post = post };
  if (inchargeclass) { newData.inchargeclass = inchargeclass };
  if (phoneno) { newData.phoneno = phoneno };
  if (email) { newData.email = email };
  if (password) { newData.password = password };

  ////////////////Find the note to be updated and updated it/////////////
  let teachers = await Teacher.findById(req.params.id);
  if (!teachers) { return res.status(404).send("not found") }
  // if(teachers.teacher.toString()!==req.teacher.id){
  //     return res.status(401).send("not allowed");
  // }
  teachers = await Teacher.findByIdAndUpdate(req.params.id, { $set: newData }, { new: true })
  res.json({ teachers });

})
//////////////////////////login teacher:Post"\api\teacher\teacherlogin"////////////////////
router.post('/teacherlogin', [
  body('email', 'please enter the valid email').isEmail(),
  body('password').exists(),
  body('idcard').exists(),

], async (req, res) => {
  const errors = validationResult(req);
  let success=false;
  // console.log(req.body);
  if (!errors.isEmpty()) {

    return res.status(400).json({success, errors: errors.array() });
  }
  try {
    const { email, password,idcard } = req.body;
    let teacher = await Teacher.findOne({ email,idcard });
    if (!teacher) {
      return res.status(400).json({success, error: "please try to login correct credentals" })
    }
    const passwordcompare = await bcrypt.compare(password, teacher.password);
    if (!passwordcompare) {
      return res.status(400).json({success, error: "please try to login correct credentals" });
    }
    const data = {
      teacher: {
        id: teacher.id
      }
    }
    success=true;
    var authtoken = jwt.sign(data, JWT_secret);
    res.json({authtoken,success})

  } catch (error) {
    console.error(error.message);
    res.json({ error: "please enter the valid credential" })
  }

}
)

/////////////////////////////////////Get single user:post:"/api/teacher/fetchteacher"/////////////////////////////////
router.post('/fetchteacher', fetchteacher, async (req, res) => {

  try {
    const userId = req.teacher.id;
    const user = await Teacher.findById(userId).select("-password");
    res.json({user});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("interval Server error")
  }

})
///////////// Get the data of all user: post:"api/teacher/fetchallteacher"/////////////////////////////////////
router.get('/fetchallteacher', async (req, res) => {
  try {
    const post = req.header('post');
    let allteacher = await Teacher.find({ post });
    res.send({ allteacher });
  } catch (error) {

    console.error(error.message);
    res.status(500).send("interval Server error")

  }
})

//////////////Routes  :delete  the notes using: Get "/api/teacher/deleteteacher. Login required"
router.delete('/deleteteacher/:id', async (req, res) => {



  ////////////////Find the note to be updated and updated it/////////////
  let teachers = await Teacher.findById(req.params.id);
  if (!teachers) { return res.status(404).send("not found") }
  // if(teachers.teacher.toString()!==req.teacher.id){
  //     return res.status(401).send("not allowed");
  // }
  teachers = await Teacher.findByIdAndDelete(req.params.id)
  res.json({ "teacher": "teacher deleted has been successfull" });

})
module.exports = router;