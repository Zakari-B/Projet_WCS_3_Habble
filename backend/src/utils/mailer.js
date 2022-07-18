const nodemailer = require("nodemailer");

require("dotenv").config();

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
        : `Habble <${process.env.SMTP_USER}>`, // Penser a remplacer l'adresse mail par un noreply ?
    to:
      data.recipient === "habble"
        ? `Habble <marie.serradori@gmail.com>`
        : data.email, // Penser a remplacer l'adresse mail par celle fournie par Patrice.
    subject: template.subject,
    html: template.body,
  };

  return transporter
    .sendMail(mailOption)
    .then((info) => {
      console.warn(info);
    })
    .catch((err) => console.warn(err));
};

module.exports = { sendMail };
