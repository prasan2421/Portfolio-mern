const mongoose = require('mongoose')

var donationSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:[true,'Please add a title']
    },

    subtitle:{
        type:String,
        required:[true,'Please add a subtitle']
    },

    link:{
        type:String,
        required:[true,'Please add a link']
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

const Projectdb = mongoose.model('donation_cols',donationSchema)
module.exports = Projectdb