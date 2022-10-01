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
})

const Userdb = mongoose.model('contacts_cols',schema)
module.exports = Userdb