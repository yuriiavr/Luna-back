const service = require("../../service/findmates");

const getAdvertisements = async (req, res, next) => {
  try {
    const list = await service.listAdvertisements();
    res.json({
      advertisements: list,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = getAdvertisements;
