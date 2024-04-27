const express = require('express');
const userAuthController = require('../controller/userAuthController');
const userAuthMiddleware = require('../middleware/userAuthMiddleware')


const route = express.Router();


// router
route.post("/jwt-verify",userAuthMiddleware);
route.post("/login" ,userAuthController);



//exports
module.exports = route;