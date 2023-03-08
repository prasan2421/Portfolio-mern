
const express = require('express')
const route = express.Router()

const services = require('../services/render');
const contactController = require('../controller/contact_controller');

// @description Root Route
// @method GET/

route.get('/api/test', services.homeRoutes)

// @description add user Route
// @method GET/

route.get('/add_user', services.add_user)


// Contact API
route.post('/add',contactController.create)
route.get('/',contactController.find)
route.put('/:id',contactController.update)
route.delete('/:id',contactController.delete)



  module.exports= route