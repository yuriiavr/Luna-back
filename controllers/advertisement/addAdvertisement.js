const Advertisement  = require("../../models/findmates");

const addAdvertisement = async (req, res) => {
  try {
    const { body } = req;
    const { _id: owner } = req.user;

    const newAdvertisement = await Advertisement.create({ ...body, owner });

    res.json({
      status: "success",
      code: 201,
      data: {
        advertisement: newAdvertisement,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      messege: "Title must be unique",
    });
  }
};

module.exports = addAdvertisement;
