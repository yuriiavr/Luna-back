const service = require("../../service/findmates");

const getAdvertisementById = async (req, res) => {
  try {
    const { advertisementId } = req.params;

    const searchedAdvertisement = await service.getAdvertisementById(advertisementId);

    if (searchedAdvertisement) {
      res.json({
        status: "success",
        code: 200,
        data: { advertisements: searchedAdvertisement },
      });
    } else {
      res.status(404).json({
        status: error,
        code: 404,
        message: `Advertisement ${advertisementId} is not found`,
        data: "Not Found",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: error,
      message: "Not Found",
    });
  }
};

module.exports = getAdvertisementById;
