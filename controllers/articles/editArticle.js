const service = require("../../service/service");

const editArticle = async (req, res, next) => {
  const { articleId } = req.params;
  const { body } = req;

  try {
    const editArticle = await service.editArticle(articleId, body);
    if (editArticle) {
      res.json({
        status: "success",
        code: 200,
        data: {
          contact: editArticle,
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

module.exports = editArticle;