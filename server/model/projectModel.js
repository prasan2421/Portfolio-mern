const mongoose = require('mongoose')

var projectSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:[true,'Please add a title']
    },

    description:{
        type:String,
        required:[true,'Please add a description']
    },

    link:{
        type:String,
        required:[true,'Please add a link']
    },

    technologies:{
        type:Array,
        
    },

    details:{
        type:String,
        required:[true,'Please add details']
    },

    images:{
        type:Array,
        required:[true,'Please add some images']
    },
   
    // gender:String,
    // type:String,
    status:Boolean,

},{
    timestamps:true
})

const Projectdb = mongoose.model('project_cols',projectSchema)
module.exports = Projectdb