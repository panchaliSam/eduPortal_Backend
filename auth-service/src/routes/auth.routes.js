const express = require('express');
const {AuthController} = require('../controllers');
const UserRouter = express.Router();

UserRouter.post("/register", AuthController.RegisterUser);
UserRouter.post("/login", AuthController.LoginUser);

module.exports = UserRouter;