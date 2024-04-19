const service = require("../../service/service");

const updateStatus = async (req, res) => {
  const { articleId } = req.params;
  const { body } = req;

  const updatedStatus = await service.updateStatus(articleId, body);
  try {
    if (updatedStatus) {
      res.json({
        status: "success",
        code: 200,
        data: {
          articles: updatedStatus,
        },
      });
    } else {
      res.status(400).json({
        status: "error",
        code: 400,
        message: `"Missing field favorite"`,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

module.exports = updateStatus;