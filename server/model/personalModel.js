const mongoose = require('mongoose')

var personalSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title']
    },
   
    // gender:String,
    // type:String,
    status:Boolean,

},{
    timestamps:true
})

const Personaldb = mongoose.model('personal_cols',personalSchema)
module.exports = Personaldb