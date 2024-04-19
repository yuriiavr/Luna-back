const additional = require("../../service/service");

const addArticle = async(req, res) =>{
    try{
        const { body } = req;
        const newAdditionalArticle = await additional.addArticle(body);

        res.json({
            status: "success",
            code: 201,
            data:{
                additional: newAdditionalArticle,
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