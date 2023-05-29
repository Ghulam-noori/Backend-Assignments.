const Post = require('../model/article')

const homePage = (req,res)=>{
	
    Post.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { posts: result});
        })
        .catch((err) => {
            console.log(err);
        });
}

const postCreate = (req, res) => {
const post = new Post(req.body);
post.save()
    .then((result) => {
        res.redirect("/");
    })
    .catch((err) => console.log(err));
}



module.exports = {
    homePage,
    postCreate
}












