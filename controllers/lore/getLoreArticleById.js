const lore = require("../../service/lore");

const getLoreArticleById = async(req, res) =>{
    try{
        const {loreArticleId} = req.params;

        const searchedLoreArticle = await lore.getArticleById(loreArticleId);

        if(searchedLoreArticle){
            res.json({
                status: "success",
                code: 200,
                data: { lore: searchedLoreArticle}
            });
        } else {
            res.status(404).json({
                status: error,
                code: 404,
                message: `Article ${loreArticleId} is not found`,
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

module.exports = getLoreArticleById;