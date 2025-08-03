const Additional  = require("../models/additional");

const listArticles = () => {
  return Additional.find();
};

const getArticleById = (id) => {
    return Additional.findById(id);
}

const addArticle = (data) => {
  return Cyber.create(data);
};

console.log(Additional);

module.exports = {
  listArticles,
  getArticleById,
  addArticle
};