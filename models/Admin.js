const mongoose=require('mongoose');
const {Schema}=mongoose;
const AdminSchema= new Schema({
    adminname:{
        type:String,
        require:true,
        unique:true
    },
    idcard:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    head:{
        type:String,
        require:true

    }
})
const User=mongoose.model('schooladmin',AdminSchema);
User.createIndexes();
module.exports=User;
