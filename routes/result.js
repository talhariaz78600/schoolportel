const express = require('express');
const router = express.Router();
const Result=require('../models/Result');

/////////////////////////////////Add subject:Post:'/api/result/createsubject'///////////
router.post('/createsubject',async (req,res)=>{
    const studentname=req.body.studentname;
    const studentrollno=req.body.studentrollno;
    const subject=req.body.subject;
    const marks=req.body.marks;
    const totalmarks=req.body.totalmarks;

    try {
        const att = await Result.create({
          
            studentrollno:studentrollno,
            studentname:studentname,
            subject:subject,
            marks:marks,
            totalmarks:totalmarks
          })
          res.json({att});
    } catch (error) {
        res.json(error);
    }
})
//////////////////////////fetch subject////////////////////////////
router.get('/fetchsubject',async (req,res)=>{
    const studentrollno=req.header('studentrollno');
    try {
        const subjects= await Result.find({studentrollno});
        res.json({subjects});
    } catch (error) {
        console.error(error);
        

    }
///////////////////// delete subject:delete:"/api/result/deletesubject/id"////////////////////////
router.delete('/deletesubject/:id', async (req, res) => {

    try {
      ////////////////Find the note to be updated and updated it/////////////
      let student = await Result.findById(req.params.id);
      if (!student) { return res.status(404).send("not found") }
      // if(teachers.teacher.toString()!==req.teacher.id){
      //     return res.status(401).send("not allowed");
      // }
      student = await Result.findByIdAndDelete(req.params.id)
      res.json({ "student": "subject deleted has been successfull" });
    } catch (error) {
      res.error(error, "internal server error");
    }
  
  
  })
  /////////////////////edit subject:put"/api/result/updatesubject/id"////////////////
  router.put('/updatesubject/:id',  async (req, res) => {
    try {
      const { subject,marks,totalmarks } = req.body;
      ///create anewnote objects////
      const newData = {};
      if (subject) { newData.subject = subject };
      if (marks) { newData.marks = marks };
      if (totalmarks) { newData.totalmarks = totalmarks };
   
  
      ////////////////Find the note to be updated and updated it/////////////
    //   let student = await Result.findById(req.params.id);
    //   if (!student) { return res.status(404).send("not found") }
    //   if(Result.student.toString()!==req.student.id){
    //       return res.status(401).send("not allowed");
    //   }
    let  student = await Result.findByIdAndUpdate(req.params.id, { $set: newData }, { new: true })
      res.json({ student });
  
    } catch (error) {
      console.log(error, "internal server error")
      res.send(error);
    }
  
  })

})
module.exports=router;