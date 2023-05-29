const express = require('express')
const app = express()
const route = require('./routes/routes')






app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: true }));

require('./config/mongo')

app.use(route)




let port = 3800
app.listen( port,()=>console.log(`listen on ${port}`))