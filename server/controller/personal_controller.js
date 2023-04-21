const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

var Personal = require('../model/personalModel')


// @desc Register new personal
// @route POST /api/personal/login
// @access Public

const create = asyncHandler(async (req, res) => {

    const { title, subtitle, project_title, project_description, profile_title, profile_description } = req.body

    // @validate request
    if (!title || !subtitle || !project_title || !project_description || !profile_title || !profile_description) {
        res.status(400)
        // res.send(data)
        .send({message:"Please add all fields"})
        // throw new Error('Please add all fields')
    }


    // create new user
    const personal = await Personal.create({
        title,
        subtitle,
        project_title,
        project_description,
        profile_title,
        profile_description,
           status:false,
           
          
    })

   
        res.status(201).json({
            title: personal.title,
            subtitle: personal.subtitle,
            project_title: personal.project_title,
            project_description: personal.project_description,
            profile_title: personal.profile_title,
            profile_description: personal.profile_description,
           
        })
    
   

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
    Personal.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot update personal information. Something went wrong.' })
            }
            else {
                res.send(data)
            }
        })
        .catch(err =>
            res.status(500).send({
                message: "Error update personal information."
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