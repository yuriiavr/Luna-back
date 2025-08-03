const Cyber = require("../models/cyber");

const listArticles = () => {
  return Cyber.find();
};

const getArticleById = (id) => {
  return Cyber.findById(id);
};

const addArticle = (data) => {
  return Cyber.create(data);
};

console.log(Cyber);

module.exports = {
  listArticles,
  getArticleById,
  addArticle,
};