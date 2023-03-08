const mongoose = require('mongoose')

var adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
    },
    gender:String,
    type:String,
    status:Boolean,

},{
    timestamps:true
})

const Userdb = mongoose.model('admin_cols',adminSchema)
module.exports = Userdb