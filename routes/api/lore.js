const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const router = express.Router();
const { lore: ctrl } = require("../../controllers");

router.get("/", asyncWrapper(ctrl.getLoreArticles));

router.get("/:loreArticleId", asyncWrapper(ctrl.getLoreArticleById));

module.exports = router;
