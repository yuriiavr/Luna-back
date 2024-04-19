const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const router = express.Router();
const { advertisement: ctrl } = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", asyncWrapper(ctrl.getAdvertisements));

router.get("/:advertisementId", asyncWrapper(ctrl.getAdvertisementById));

router.post("/", authenticate, asyncWrapper(ctrl.addAdvertisement));

router.delete("/:advertisementId", asyncWrapper(ctrl.removeAdvertisement));

router.put(
  "/:advertisementId",
  asyncWrapper(ctrl.editAdvertisement)
);

module.exports = router;
