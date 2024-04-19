const service = require("../../service/findmates");

const removeAdvertisement = async (req, res, next) => {
  try {
    const { advertisementId } = req.params;
    const list = await service.removeAdvertisement(advertisementId);

    if (list) {
      res.json({
        status: "success",
        code: 200,
        advertisements: list,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact ${advertisementId} can not be deleted `,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

module.exports = removeAdvertisement;
