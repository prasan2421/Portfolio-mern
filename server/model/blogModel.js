const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'admin_cols'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        
    },
    // subject:String,
    markdown:{ 
        type:String,
        required:true,  
    },
},{
    timestamps:true
})

const Blogdb = mongoose.model('blogs_cols',schema)
module.exports = Blogdb