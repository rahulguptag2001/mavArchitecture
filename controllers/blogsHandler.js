const blogs=require('../routes/blogs').blogs;
module.exports.getBlogs = (req,res,next)=>{
    res.render('blogsList',{
        blogs
    });
};

