const Cyber  = require("../models/cyber");

const listArticles = () => {
  return Cyber.find();
};

const getArticleById = (id) => {
    return Cyber.findById(id);
}

console.log(Cyber);

module.exports = {
  listArticles,
  getArticleById,
};