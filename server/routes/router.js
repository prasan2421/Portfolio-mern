
const express = require('express')
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const contactController = require('../controller/contact_controller');

// @description Root Route
// @method GET/

route.get('/api/test', services.homeRoutes)

// @description add user Route
// @method GET/

route.get('/add_user', services.add_user)


// User API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)


// Contact API
route.post('/api/contacts',contactController.create)
route.get('/api/contacts',contactController.find)
route.put('/api/contact/:id',contactController.update)
route.delete('/api/contact/:id',contactController.delete)

  module.exports= route