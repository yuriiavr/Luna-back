const Lore  = require("../models/lore");

const listArticles = () => {
  return Lore.find();
};

const getArticleById = (id) => {
    return Lore.findById(id);
}

console.log(Lore);

module.exports = {
  listArticles,
  getArticleById,
};