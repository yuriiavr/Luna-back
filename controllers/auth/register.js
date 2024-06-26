const { User } = require("../../models/user");
const requestError = require("../../helpers/requestError.js");
const { createMailTransporter } = require("../../helpers/createVerifyEmail.js");
const { sendVerificationMail } = require("../../helpers/sendEmail.js");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const register = async (req, res) => {
  const { email, userName, password, subscription } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const user = await User.findOne({ email });

  if (user) {
    throw requestError(409, "E-mail is already in use");
  } else {
    const payload = {
      email,
    };

    const verificationToken = nanoid();

    const newUser = await User.create({
      email,
      userName,
      password: hashedPassword,
      subscription,
      avatarURL,
      verificationToken,
    });

    sendVerificationMail(email, verificationToken)

    res.status(201).json({
      code: 201,
      status: "success",
      user: {
        email: newUser.email,
        userName: newUser.userName,
        subscription: newUser.subscription,
        avatarURL: newUser.avatarURL,
      },
    });
  }
};

module.exports = register;