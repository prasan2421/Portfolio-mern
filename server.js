const express = require('express')
const dotenv = require('dotenv')


const morgan = require('morgan')
const bodyparser = require('body-parser')
// Accessing the path module
const path= require('path')
const cors = require("cors");

const connectDB = require('./server/database/connection')

dotenv.config({path:'.env'})
const app = express()
app.use(cors());




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



// load routers
app.use('/',require('./server/routes/router'))

const port = process.env.PORT || 3001

// Client path


if (process.env.NODE_ENV === "production") {
  // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/out")));
app.use(express.static( "client/out"));
// Step 2:
// API requests
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client", "out", "index.html"));
});

}

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})
