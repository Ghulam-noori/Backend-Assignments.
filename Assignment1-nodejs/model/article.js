const mongoose = require('mongoose');
const schema = mongoose.Schema;


const newArticle = new schema({
    message:{
        type : String,
        required : true
    }},
    {timestamps : true
    }
)


module.exports = mongoose.model('Message', newArticle);