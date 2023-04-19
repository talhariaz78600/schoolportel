const express = require('express');
const router = express.Router();
const   Frist = require('../models/Frist')
router.post('/fristpage',async(req,res)=>{
    const photof=req.body.photof;
    const fristheading=req.body.fristheading;
    const fristpara=req.body.fristpara;
   

    const fristpage="fristpage";
    const creat= await Frist.create({
        photof:photof,
        fristheading:fristheading,
        fristpara:fristpara,
        fristpage:fristpage
    })
    res.json({creat});

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