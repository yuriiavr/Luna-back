const Lore  = require("../models/lore");

const listArticles = () => {
  return Lore.find();
};

const getArticleById = (id) => {
    return Lore.findById(id);
}

const addArticle = (data) => {
  return Cyber.create(data);
};

console.log(Lore);

module.exports = {
  listArticles,
  getArticleById,
  addArticle
};