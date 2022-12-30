// server.js
const express = require('express')
const next = require('next')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path= require('path')
const cors = require("cors");
const dotenv = require('dotenv')
var { graphqlHTTP } = require('express-graphql');
const schema = require('./server/schema/schema')

const connectDB = require('./server/database/connection')
const { errorHandler } = require('./server/middleware/errorMiddleware');
dotenv.config({path:'.env'})
connectDB();

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express();

    server.use(cors());
    //log requests
    server.use(morgan('tiny'));
    //mongodb connection
   
    server.use(bodyparser.json())
//parse request to body-parser
server.use(bodyparser.urlencoded({extended:true}))

server.use('/graphql', graphqlHTTP({
    schema,
   
    graphiql: process.env.NODE_ENV === 'development'
}));

// load assets
server.use('/css', express.static(path.resolve(__dirname,"assets/css"))) 
server.use('/img', express.static(path.resolve(__dirname,"assets/img"))) 
server.use('/js', express.static(path.resolve(__dirname,"assets/js"))) 



// load routers
server.use('/api/users',require('./server/routes/usersRoutes'))
server.use('/api/contacts',require('./server/routes/contactsRoutes'))
server.use('/api/blogs',require('./server/routes/blogRoutes'))
server.use('/api/admins',require('./server/routes/adminRoutes'))



//catch-all for nextJS /pages
    server.get('*', (req,res)=>{
        return handle(req, res)
    })

    server.listen(process.env.PORT, (err)=>{
        if(err) throw err
        console.log("server ready on port: ", process.env.PORT)
    })

    server.use(errorHandler)
}).catch ((err)=> {
    console.error('Error occurred handling', err.stack)
    process.exit(1)
  })