const express = require('express');
const router = express.Router();
const   Attendence = require('../models/Attendence')

// const { body, validationResult } = require('express-validator');

//////////////////////////////Studentattendence:get:"/api/attendence/studentattendence"/////////////////
router.post('/studentattendence',async (req,res)=>{
    const attendence=req.body.attendence;
    const studentname=req.body.studentname;
    const studentrollno=req.body.studentrollno;
    let success=false;
try {
    

    const att = await Attendence.create({
        attendence:attendence,
        studentrollno:studentrollno,
        studentname:studentname
      })
     success=true;
    res.json({success,att});
} catch (error) {
    res.json({error,success});
}
})
/////////////////////////////student attendence get////////////////////////////
router.get('/fetchattendence',async (req,res)=>{
        const studentrollno=req.header('studentrollno')
        try {
            
            const atend= await Attendence.find({studentrollno});
            res.json({atend});
            
        } catch (error) {
            res.json(error);
        }

})
module.exports=router;