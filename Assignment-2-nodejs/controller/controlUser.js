const Message = require('../model/postModel')


const homePage = (req, res)=>{

   Message.find()
   .sort({updatedAt: -1})
   .then(result=>{res.render('index', {messages : result})})
   .catch(err=>{console.log(err)});
}
const getMessage = (req, res)=>{
    const text = new Message (req.body)
    text.save()
    .then(result=>{res.redirect('/')})
    .catch (err=>{console.log(err)});
}
const messageDetails =(req, res)=>{
    const id = req.params.id;
    Message.findById(id)
    .then((result) =>{
        res.render('messageDetail' , {messages : result});
    })
    .catch(err =>{console.log(err)});
}

const messageEdit = (req, res)=>{
    const id = req.params.id;
    Message.findByIdAndUpdate(id, req.body)
    .then(result=>{res.redirect('/')})
    .catch (err=>{console.log(err)});
}
const deleteDetails =(req, res)=>{
    const id = req.params.id;
    Message.findById(id)
    .then((result) =>{
        res.render('deleteMessage' , {messages : result});
    })
    .catch(err =>{console.log(err)});
}

const deleteMessage = (req, res) => {
    const id = req.params.id;
    Message.findByIdAndDelete(id)
    .then(result=>{res.redirect('/')})
    .catch (err=>{console.log(err)});
}







module.exports ={
    homePage,
    getMessage,
    deleteMessage,
    messageDetails,
    messageEdit,
    deleteDetails
}