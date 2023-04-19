const mongoose=require('mongoose');
const {Schema}=mongoose;
const FristSchema= new Schema({
    photof:{
        type:String,
        require:true
    },
    fristheading:{
        type:String,
    },
    fristpage:{
        type:String,
        require:true
        
    },
    date: { 
        type: Date, 
        default:Date.now,
     }
    })

const User=mongoose.model('frist',FristSchema);
// User.createIndexes();
module.exports=User;
