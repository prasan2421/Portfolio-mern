const asyncHandler = require('express-async-handler')
const { ObjectId } = require('mongodb');

var Blog = require('../model/blogModel')
var Admin = require('../model/adminModel')

// @desc    Get Blogs
// @route   GET /api/blogs
// @access  Private
const getBlogs = asyncHandler(async (req, res) => {
  // const blogs = await Blog.find({ user: req.user.id })

  if(req.params.id){
    // await Blog.findById(req.params.id)
   

    await Blog.aggregate([
      {
        $match: {
          _id: ObjectId(req.params.id),
        },
      },
      {
        $lookup: {
          from: "admin_cols",
          as:"admin",
          localField:"user",
          foreignField:"_id"
        },
      },
    ])


    .then(blogs => {
      // res.send(user)
      res.status(200).json(blogs)

    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Error Occured while retrieving Blogs information" })
    })
  }
  else{
    await Blog.aggregate([
      {
        $lookup:{
          from: "admin_cols",
          as:"admin",
          localField:"user",
          foreignField:"_id"
        
        }
      }
      
        ])

        .then(blogs => {
          // res.send(user)
          res.status(200).json(blogs)
    
        })
        .catch(err => {
          res.status(500).send({ message: err.message || "Error Occured while retrieving Blogs information" })
        })
  }
  

  // .find()

   


})

// @desc    Get Blog
// @route   GET /api/blog
// @access  Private
const getBlogsPublic = asyncHandler(async (req, res) => {
  // res.send({ message: "Content cannot be empty!!" });return;
  const blog = await Blog.find()

  res.status(200).json(blog)
})


// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setBlog = asyncHandler(async (req, res) => {
  const { title, description, markdown, } = req.body

  // @validate request
  if (!title || !description | !markdown) {
    res.status(400)
      // res.send(data)
      .send({ message: "Content cannot be empty!!" })
    // throw new Error('Please add all fields')
  }


  const blog = await Blog.create({
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  })

  res.status(200).json(blog)

  // .then(data=>{
  //     res.send(data)
  // })
  // .catch(err=>{
  //     res.status(500).send({
  //         message:err.message || "Some error occured while creating a blog operation"
  //     })
  // })
})

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) {
    res.status(400)
    throw new Error('Blog not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBlog)
})


// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) {
    res.status(400)
    throw new Error('Blog not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (blog.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await blog.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBlogs,
  setBlog,
  getBlogsPublic,
  updateBlog,
  deleteBlog,
}