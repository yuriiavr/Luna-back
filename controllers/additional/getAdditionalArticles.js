const Additional = require("../../models/additional");

const getAdditionalArticles = async (req, res, next) => {
  try {
    const list = await Additional.find();
    res.json({
      additional: list,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = getAdditionalArticles;