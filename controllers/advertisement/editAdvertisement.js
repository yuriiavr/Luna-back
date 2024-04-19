const service = require("../../service/findmates");

const editAdvertisement = async (req, res, next) => {
  const { advertisementId } = req.params;
  const { body } = req;

  try {
    const editAdvertisement = await service.editAdvertisement(advertisementId, body);
    if (editAdvertisement) {
      res.json({
        status: "success",
        code: 200,
        data: {
          contact: editAdvertisement,
        },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact ${contactId} can not be deleted `,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

module.exports = editAdvertisement;
