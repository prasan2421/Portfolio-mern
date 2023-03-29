const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

var Personal = require('../model/personalModel')


// @desc Register new personal
// @route POST /api/personal/login
// @access Public

const create = asyncHandler(async (req, res) => {

    const { name, email, password, gender, type } = req.body

    // @validate request
    if (!name || !email || !password) {
        res.status(400)
        // res.send(data)
        .send({message:"Please add all fields"})
        // throw new Error('Please add all fields')
    }

    // @Check if personal exists

    const personalExists = await Personal.findOne({ email })

    if (personalExists) {
        res.status(400)
        .send({message:'Personal already exists'})
        // throw new Error('Personal already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create new user
    const personal = await Personal.create({
        name,
        email,
        password: hashedPassword,
        gender,
        type,
           status:false,
           
          
    })

    if (personal) {
        res.status(201).json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            // status: admin.status,
            gender: admin.gender,
            type: admin.type,
            token: generateToken(user._id),
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid Personal data')

    }

})


// @desc authenticate a user
// @route POST /api/Personal/login
// @access Public


const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body


    if(!email || !password ){
        return res
        .status(400)
        .send({message:"Content cannot be empty"})
    
    }

   
  // Check for user email
  const personal = await Personal.findOne({ email })

  if (personal && (await bcrypt.compare(password, personal.password))) {
    res.json({
      _id: personal.id,
      name: personal.name,
      email: personal.email,
      token: generateToken(personal._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials: ' + email +' & '+password)
  }

})

//Update a new identified user by user id
const update = asyncHandler(async (req, res) => {
    // validate request
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Content cannot be empty" })
    }

    const id = req.params.id
    Contactdb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot update contact. Something went wrong.' })
            }
            else {
                res.send(data)
            }
        })
        .catch(err =>
            res.status(500).send({
                message: "Error update contact information."
            }))

})

//Delete a user with specified user id in the request

const remove = asyncHandler(async (req, res) => {

    const id = req.params.id

    Contactdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Cannot delete. Maybe wrong id." })
            } else {
                res.send({
                    message: "Contact was deleted successfully!"
                })
            }
        })
        .catch(err =>
            res.status(500).send({
                message: "Error deleting contact."
            }))




})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    // const {_id,name,email} = await Admin.findById(req.user.id)
    res.status(200).json(req.user)
  })

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }

module.exports = {
    create,
    login,
    getMe,
    update,
    remove
}