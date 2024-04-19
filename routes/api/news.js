const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const router = express.Router();
const {
  addArticletValidation,
  putArticleValidation,
  favoriteValidation,
} = require("../../middlewares/validationMiddlewares");
const { articles: ctrl } = require("../../controllers");

router.get("/", asyncWrapper(ctrl.getArticles));

router.get("/:articleId", asyncWrapper(ctrl.getArticleById));

router.post("/", addArticletValidation, asyncWrapper(ctrl.addArticle));

router.delete("/:articleId", asyncWrapper(ctrl.removeArticle));

router.put("/:articleId", putArticleValidation, asyncWrapper(ctrl.editArticle));

router.patch("/:articleId/favorite", favoriteValidation, asyncWrapper(ctrl.updateStatus));

module.exports = router;
