const additional = require("../../service/additional");

const getAdditionalArticleById = async(req, res) =>{
    try{
        const {additionalArticleId} = req.params;

        const searchedAdditionalArticle = await additional.getArticleById(additionalArticleId);

        if(searchedAdditionalArticle){
            res.json({
                status: "success",
                code: 200,
                data: { additional: searchedAdditionalArticle}
            });
        } else {
            res.status(404).json({
                status: error,
                code: 404,
                message: `Article ${additionalArticleId} is not found`,
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

module.exports = getAdditionalArticleById;