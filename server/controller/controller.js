var Userdb = require('../model/model')

// create and save new user
exports.create = (req,res) =>{
// validate request
if(!req.body){
    return res
    .status(400)
    .send({message:"Content cannot be empty"})

}

//new user
const user = new Userdb({
    name: req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

// save user in the database
user
.save(user)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({
        message:err.message || "Same error occured while creating a create operation"
    })
})

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req,res) =>{

    if(req.query.id){
const id = req.query.id
Userdb.findById(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:"Cannot find user:"+id})
    }
    else{
        res.send(data)
    }
})
.catch(err=>
    res.status(500).send({
        message:"Error finding user information."+ id
    }))
    }
    else{
        Userdb.find()
        .then(user=>{
            res.send(user)
    
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Occured while retrieving user information"})
        })
    
    }
   
}

//Update a new identified user by user id
exports.update = (req,res) => {
// validate request
if(!req.body){
    return res
    .status(400)
    .send({message:"Content cannot be empty"})
}

const id =  req.params.id
Userdb.findByIdAndUpdate(id,req.body)
.then(data=>{
    if(!data){
        res.status(404).send({message:'Cannot update user. Something went wrong.'})
    }
    else{
        res.send(data)
    }
})
.catch(err=>
    res.status(500).send({
        message:"Error update user information."
    }))

}

//Delete a user with specified user id in the request

exports.delete = (req,res) => {

    const id= req.params.id

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: "Cannot delete. Maybe wrong id."})
        }else{
            res.send({
                message:"User was deleted successfully!"
            })
        }
    })
    .catch(err=>
        res.status(500).send({
            message:"Error deleting user."
        }))
    
    


}