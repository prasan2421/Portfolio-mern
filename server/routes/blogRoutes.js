
const express = require('express')
const router = express.Router()

const services = require('../services/render');
const blogController = require('../controller/blogController');
const { protect } = require('../middleware/authMiddleware')

const {
  getBlogs,
  getBlogsPublic,
  setBlog,
  updateBlog,
  deleteBlog,
} = require('../controller/blogController')

// @description Root Route
// @method GET/

router.get('/test', services.homeRoutes)

// @description add user Route
// @method GET/

router.get('/add_user', services.add_user)



// Blog API
// route.post('/add',blogController.create)
// route.get('/',blogController.find)
// route.put('/:id',blogController.update)
// route.delete('/:id',blogController.delete)




router.route('/').get(protect, getBlogs).post(protect, setBlog)
router.route('/:id').get(protect, getBlogs)
router.route('/:id').delete(protect, deleteBlog).put(protect, updateBlog)
router.route('/public/all').get(getBlogsPublic)
  module.exports= router