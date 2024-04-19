const Cyber = require("../../models/cyber");

const getCyberArticles = async (req, res, next) => {
  try {
    const list = await Cyber.find();
    res.json({
      cyber: list,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = getCyberArticles;