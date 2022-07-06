const nodemailer = require("nodemailer");

require("dotenv").config();

// async function mailer({ lastname, firstname, email, phone, message }) {
const sendMail = async (data, template) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOption = {
    from:
      data.recipient === "habble"
        ? `${data.firstname} ${data.lastname} <${data.email}>`
        : `Habble <${process.env.SMTP_USER}>`,
    to:
      data.recipient === "habble"
        ? `Habble <zakari.boureghda@gmail.com>`
        : data.email,
    subject: template.subject,
    html: template.body,
  };

  return transporter
    .sendMail(mailOption)
    .then((info) => console.warn(info))
    .catch((err) => console.warn(err));
};

module.exports = { sendMail };
