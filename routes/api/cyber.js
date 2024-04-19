const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const router = express.Router();
const { cyber: ctrl } = require("../../controllers");

router.get("/", asyncWrapper(ctrl.getCyberArticles));

router.get("/:cyberArticleId", asyncWrapper(ctrl.getCyberArticleById));

module.exports = router;
