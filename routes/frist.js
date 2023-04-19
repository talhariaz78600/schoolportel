const express = require('express');
const router = express.Router();
const   Frist = require('../models/Frist')
router.post('/fristpage',async(req,res)=>{
    const photof=req.body.photof;
    const fristheading=req.body.fristheading;
   
    try {
        const fristpage="fristpage";
        const creat= await Frist.create({
            photof:photof,
            fristheading:fristheading,
            fristpage:fristpage
        })
        res.json({creat});
        
    } catch (error) {
        console.error(error);
    }

})
////////////////////////fetch information for activites//////////////////////
router.get('/getactivites',async(req,res)=>{
    try {
        const fristpage='fristpage';
        const activites= await Frist.find({fristpage});
        res.json({activites});
    } catch (error) {
        console.error(error);
    }
})
module.exports=router;