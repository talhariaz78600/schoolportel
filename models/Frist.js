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

    FristSchema.index({ name: 1 }, { maxTimeMS: 20000 });

    module.exports = mongoose.model('frist', FristSchema);