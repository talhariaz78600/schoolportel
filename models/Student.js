const mongoose=require('mongoose');
const {Schema}=mongoose;

const StudentSchema= new Schema({
    studentname:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    studentclass:{
        type:String,
        required:true
    },
    studentrollno:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default: Date.now
    },

});

StudentSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('student', StudentSchema);