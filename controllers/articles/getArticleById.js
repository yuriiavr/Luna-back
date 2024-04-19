const service = require("../../service/service");

const getArticleById = async(req, res) =>{
    try{
        const {articleId} = req.params;

        const searchedArticle = await service.getArticleById(articleId);

        if(searchedArticle){
            res.json({
                status: "success",
                code: 200,
                data: { articles: searchedArticle}
            });
        } else {
            res.status(404).json({
                status: error,
                code: 404,
                message: `Article ${articleId} is not found`,
                data: "Not Found",
            });
        }
    } catch (error){
        res.status(404).json({
            status: error,
            message: "Not Found",
        });
    }
};

module.exports = getArticleById;