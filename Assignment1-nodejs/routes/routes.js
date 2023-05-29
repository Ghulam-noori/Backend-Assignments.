const express = require('express');
const route  = express();
const userController = require('../controller/functionController')




route.get('/', userController.homePage)
route.post('/',userController.postCreate)















module.exports=route