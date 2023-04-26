const mongoose=require('mongoose');
const {Schema}=mongoose;
const Result=new Schema({
    studentname:{
        type:String,
        required:true
    },
    studentrollno:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    totalmarks:{
        type:Number,
        required:true,
    },
    date:{
        type: Date, 
        default:Date.now,

    }

})
Result.index({ name: 1 }, { maxTimeMS: 20000 });

module.exports = mongoose.model('result', Result);

