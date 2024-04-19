const Lore = require("../../models/lore");

const getLoreArticles = async (req, res, next) => {
  try {
    const list = await Lore.find();
    res.json({
      lore: list,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = getLoreArticles;