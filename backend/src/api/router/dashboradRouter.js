const express = require('express');
const userAuthController = require('../controller/userAuthController');
const {verifyAuth} = require('../middleware/userAuthMiddleware')


const route = express.Router();


// router
route.post("/jwt-verify",verifyAuth);
route.post("/login" ,userAuthController);



//exports
module.exports = route;