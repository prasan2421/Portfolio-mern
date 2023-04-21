const mongoose = require('mongoose')

var personalSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title']
    },

    subtitle:{
        type:String,
        required:[true,'Please add a subtitle']
    },
    
    project_title:{
        type:String,
        required:[true,'Please add a title']
    },

    project_description:{
        type:String,
        required:[true,'Please add a description']
    },

    profile_title:{
        type:String,
        required:[true,'Please add a title']
    },

    profile_description:{
        type:String,
        required:[true,'Please add a description']
    },
    
    // gender:String,
    // type:String,
    status:Boolean,

},{
    timestamps:true
})

const Personaldb = mongoose.model('personal_cols',personalSchema)
module.exports = Personaldb