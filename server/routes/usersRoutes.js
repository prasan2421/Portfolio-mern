
const express = require('express')
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

// @description Root Route
// @method GET/

route.get('/api/test', services.homeRoutes)

// @description add user Route
// @method GET/

route.get('/add_user', services.add_user)


// User API
route.post('/add',controller.create)
route.get('/',controller.find)
route.put('/:id',controller.update)
route.delete('/:id',controller.delete)

module.exports= route