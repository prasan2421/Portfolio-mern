const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        
    },
    subject:String,
    message:{
        type:String,
        required:true,
        
    },
},{
    timestamps:true
})

const Contactdb = mongoose.model('contacts_cols',schema)
module.exports = Contactdb