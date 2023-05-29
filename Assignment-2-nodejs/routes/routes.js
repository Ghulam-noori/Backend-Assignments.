const express = require('express');
const route = express.Router();
const controlUser = require('../controller/controlUser')

route.get('/' , controlUser.homePage)
route.post('/', controlUser.getMessage)

route.get('/message/create/:id', controlUser.messageDetails)
route.post('/message/create/:id',controlUser.messageEdit)


route.get('/posts/delete/:id', controlUser.deleteDetails)
route.post('/posts/delete/:id', controlUser.deleteMessage)








module.exports = route;