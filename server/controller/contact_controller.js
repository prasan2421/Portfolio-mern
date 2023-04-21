var Contactdb = require('../model/contactModel')

// create and save new user
exports.create = (req,res) =>{
// validate request
if(!req.body){
    return res
    .status(400)
    .send({message:"Content cannot be empty"})

}

//new user
const contact = new Contactdb({
    name: req.body.name,
    email:req.body.email,
    subject:req.body.subject,
    message:req.body.message
})

// save user in the database
contact
.save(contact)
.then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({
        message:err.message || "Some error occured while creating a create operation"
    })
})}



// retrieve and return all users/ retrive and return a single user
exports.find = (req,res) =>{

    if(req.query.id){
const id = 'req.query.id'
Contactdb.findById(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:"Cannot find contact:"+id})
    }
    else{
        res.send(data)
    }
})
.catch(err=>
    res.status(500).send({
        message:"Error finding contact information."+ id
    }))
    }
    else{
      
        Contactdb.find()
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
Contactdb.findByIdAndUpdate(id,req.body)
.then(data=>{
    if(!data){
        res.status(404).send({message:'Cannot update contact. Something went wrong.'})
    }
    else{
        res.send(data)
    }
})
.catch(err=>
    res.status(500).send({
        message:"Error update contact information."
    }))

}

//Delete a user with specified user id in the request

exports.delete = (req,res) => {

    const id= req.params.id

    Contactdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: "Cannot delete. Maybe wrong id."})
        }else{
            res.send({
                message:"Contact was deleted successfully!"
            })
        }
    })
    .catch(err=>
        res.status(500).send({
            message:"Error deleting contact."
        }))
    
    


}