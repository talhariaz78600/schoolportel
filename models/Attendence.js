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

    AttendenceSchema.index({ name: 1 }, { maxTimeMS: 20000 });

    module.exports = mongoose.model('attendence', AttendenceSchema);