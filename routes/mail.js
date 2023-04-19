const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
router.post('/sendemail',async(req,res)=>{
 try {
    let emaill=req.body.email;
    // let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        service:"gmail",
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'dorothy.conn@ethereal.email',
            pass: 'ZqcxC7nJq24mwwd6ya'
        },
      });
      let info = await transporter.sendMail({
        from: '"talha riaz" <foo@example.com>', // sender address
        to: `${emaill}`, // list of receivers
        subject: "Hello Talha", // Subject line
        text: "what is your aims?", // plain text body
        html: "<b>My life my rules?</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.json(info);
 } catch (error) {
    console.error(error);
 }

})
module.exports=router;

