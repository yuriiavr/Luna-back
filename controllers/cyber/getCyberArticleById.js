const cyber = require("../../service/cyber");

const getCyberArticleById = async(req, res) =>{
    try{
        const {cyberArticleId} = req.params;

        const searchedCyberArticle = await cyber.getArticleById(cyberArticleId);

        if(searchedCyberArticle){
            res.json({
                status: "success",
                code: 200,
                data: { cyber: searchedCyberArticle}
            });
        } else {
            res.status(404).json({
                status: error,
                code: 404,
                message: `Article ${cyberArticleId} is not found`,
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

module.exports = getCyberArticleById;