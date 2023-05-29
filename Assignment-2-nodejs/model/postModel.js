const mongoose = require('mongoose');
const schema = mongoose.Schema;



const newArticle = new schema({
    title:{
        type : String,
        required : true
    },
    message:{
        type : String,
        required : true
    }
},{
    timestamps: true
})




module.exports = mongoose.model('message', newArticle)