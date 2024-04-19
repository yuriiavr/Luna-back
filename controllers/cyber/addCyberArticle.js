const cyber = require("../../service/cyber");

const addArticle = async(req, res) =>{
    try{
        const { body } = req;
        const newCyberArticle = await cyber.addArticle(body);

        res.json({
            status: "success",
            code: 201,
            data:{
                cyber: newCyberArticle,
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