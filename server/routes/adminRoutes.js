
const express = require('express')
const router = express.Router()
const {
  create,
    login,
    update,
    getMe,
    remove
} = require('../controller/admin_controller');
const { protect } = require('../middleware/authMiddleware')



router.post('/add',create)
router.post('/login',login)
router.get('/me', protect, getMe)
router.put('/:id',update)
router.delete('/:id',remove)



  module.exports= router