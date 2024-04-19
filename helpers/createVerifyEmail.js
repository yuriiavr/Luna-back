const nodemailer = require("nodemailer")

const createMailTransporter = () => {
	const transporter = nodemailer.createTransport({
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "luna.webapp@meta.ua",
      pass: "Uva123uva",
    },
  });

	return transporter
}

module.exports = {createMailTransporter}