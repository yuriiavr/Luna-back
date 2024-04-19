const Article  = require("../models/articles");

const listArticles = () => {
  return Article.find();
};

const addArticle = (body) => {
    return Article.create(body);
}

const getArticleById = (id) => {
    return Article.findById(id);
}

const removeArticle = (id) => {
  return Article.findByIdAndRemove({ _id: id });
};

const updateStatus = (id, favorite) => {
  return Article.findByIdAndUpdate({ _id: id }, favorite, { new: true });
};

const editArticle = (id, fields) => {
  return Article.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

console.log(Article);

module.exports = {
  listArticles,
  addArticle,
  getArticleById,
  removeArticle,
  updateStatus,
  editArticle,
};