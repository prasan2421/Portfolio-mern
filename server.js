const express = require('express')
const dotenv = require('dotenv')


const morgan = require('morgan')
const bodyparser = require('body-parser')
// Accessing the path module
const path= require('path')
const cors = require("cors");

const connectDB = require('./server/database/connection')

dotenv.config({path:'config.env'})
const app = express()
app.use(cors());

dotenv.config({path:'config.env'})

const port = process.env.PORT || 3001

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css"))) 
app.use('/img', express.static(path.resolve(__dirname,"assets/img"))) 
app.use('/js', express.static(path.resolve(__dirname,"assets/js"))) 


// Client path
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/out")));
// Step 2:



// load routers
app.use('/',require('./server/routes/router'))

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/out", "index.html"));
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})
