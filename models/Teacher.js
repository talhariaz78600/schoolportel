const mongoose=require('mongoose');
const {Schema}=mongoose;

const TeacherSchema= new Schema({
    teachername:{
        type:String,
        required:true
    },
    idcard:{
        type:String,
        required:true,
        unique:true
    },
    inchargeclass:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default: Date.now
    },
});
TeacherSchema.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('teacher', TeacherSchema);