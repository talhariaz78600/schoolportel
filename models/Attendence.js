const mongoose=require('mongoose');
const {Schema}=mongoose;
const AttendenceSchema= new Schema({
    studentname:{
        type:String,
        require:true
    },
    studentrollno:{
        type:String,
        require:true
    },
    attendence:{
        type:String,
        require:true
    },
    date: { 
        type: Date, 
        default:Date.now,
     }
    })

const User=mongoose.model('attendence',AttendenceSchema);
User.createIndexes();
module.exports=User;
