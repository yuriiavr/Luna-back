const Additional  = require("../models/additional");

const listArticles = () => {
  return Additional.find();
};

const getArticleById = (id) => {
    return Additional.findById(id);
}

console.log(Additional);

module.exports = {
  listArticles,
  getArticleById,
};