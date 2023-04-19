const mongoose=require('mongoose');
const {Schema}=mongoose;
const FristSchema= new Schema({
    photof:{
        type:String,
    },
    fristheading:{
        type:String,
    },
    fristpara:{
        type:String,
        require:true
    },
    fristpage:{
        type:String,
        
    },
    date: { 
        type: Date, 
        default:Date.now,
     }
    })

const User=mongoose.model('frist',FristSchema);
User.createIndexes();
module.exports=User;
