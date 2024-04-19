const lore = require("../../service/service");

const addArticle = async(req, res) =>{
    try{
        const { body } = req;
        const newLoreArticle = await lore.addArticle(body);

        res.json({
            status: "success",
            code: 201,
            data:{
                lore: newLoreArticle,
            },
        });
    } catch(error){
        res.status(404).json({
            status: "error",
            messege: "Title must be unique"
        })
    }
};

module.exports = addArticle;