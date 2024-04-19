const service = require("../../service/service");

const getArticles = async (req, res, next) => {
  try {
    const list = await service.listArticles();
    res.json({
      articles: list,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = getArticles;