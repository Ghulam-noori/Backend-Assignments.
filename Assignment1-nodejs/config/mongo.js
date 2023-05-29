const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sakhiehsanyar0:Sakhi!12345@cluster0.q3rqllf.mongodb.net/')
.then(res =>{
    console.log('Db is connected')})
.catch(err=>console.log(err));

