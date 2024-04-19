const { User } = require("../../models/user");

const roleStatus = async (req, res) => {
  const { _id } = req.user;
  const { role } = req.body;

  const updatedRole = await User.findByIdAndUpdate(
    _id,
    { role },
    { new: true }
  );
  res.status(201).json({
    user: {
      email: updatedRole.email,
      role: updatedRole.role,
    },
  });
};

module.exports = roleStatus;