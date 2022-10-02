const mongoose=require('mongoose')

const connectDB = async()=>{
    try{
//mongodb connection string
const con = await mongoose.connect("mongodb+srv://prasan2421:Shimaastha2421@cluster0.pt3kltd.mongodb.net/portfolio_db?retryWrites=true&w=majority")

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