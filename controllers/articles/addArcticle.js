const service = require("../../service/service");

const addArticle = async(req, res) =>{
    try{
        const { body } = req;
        const newArticle = await service.addArticle(body);

        res.json({
            status: "success",
            code: 201,
            data:{
                article: newArticle,
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