const { createMailTransporter } = require("./createVerifyEmail");
const { BASE_URL } = process.env;

const sendVerificationMail = (email, verificationToken) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: "luna.webapp@meta.ua",
    to: email,
    subject: "Підтвердіть реєстрацію",
    html: `
				<body style="background-color: #0E141C;">
					<img style="padding: 20px; width: 200px; height: 100px;" src="https://res.cloudinary.com/dfasgvfex/image/upload/v1713008748/luna%20logo.png" alt="luna logo">
					<div style="text-align: center; padding-bottom: 120px">
						<h1 style="margin: 0 auto; color: #fff; max-width: 800px; font-size: 22px; margin-bottom: 30px; text-align: center;">Вітаємо, ви успішно зареєстрували аккаунт на нашому сайті, щоб закінчити верифікацію, будь ласка, підтвердіть реєстрацію нажавши на кнопку нижче</h1>
						<a style="padding: 10px 20px; background-color: #ff5277; color: #fff; text-decoration: none;" target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}" >Натисніть для підтвердження</a>
					</div>
				</body>
			  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Verification email sent");
    }
  });
};

module.exports = { sendVerificationMail };
