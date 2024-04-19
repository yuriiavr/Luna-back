const service = require("../../service/service");

const removeArticle= async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const list = await service.removeArticle(articleId);

    if (list) {
      res.json({
        status: "success",
        code: 200,
        articles: list,
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact ${articleId} can not be deleted `,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

module.exports = removeArticle;