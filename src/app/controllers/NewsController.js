class NewsController{
    //GET /news
    index(req,res){
        res.render("news");
    }

    //GET /new/:slug
    show(req,res){
        res.send("tin tuc moi ty nha");
    }
}

module.exports = new NewsController;