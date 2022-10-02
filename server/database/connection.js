const mongoose=require('mongoose')

const connectDB = async()=>{
    try{
//mongodb connection string
const con = await mongoose.connect(process.env.MONGO_URI)

    // // depreciation warning message remove
//     ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
//     useCreateIndex:true
// }
 

console.log(  'Mongodb connected'  )
    }catch(err){
console.log(err)
process.exit(1)
    }
}

module.exports=connectDB