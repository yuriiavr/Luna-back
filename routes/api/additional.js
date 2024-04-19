const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const router = express.Router();
const { additional: ctrl } = require("../../controllers");

router.get("/", asyncWrapper(ctrl.getAdditionalArticles));

router.get("/:additionalArticleId", asyncWrapper(ctrl.getAdditionalArticleById));

module.exports = router;
