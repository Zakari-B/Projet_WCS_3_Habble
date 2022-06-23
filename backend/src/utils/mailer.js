const nodemailer = require("nodemailer");

async function mailer({ lastname, firstname, email, phone, message }) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVEUR, // Serveur de messagerie
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"${lastname} ${firstname}" <${email}>`,
    to: "marie.serradori@gmail.com", // Mettre le vrai mail de habble
    subject: `Formulaire de contact : ${lastname} ${firstname}`,
    text: `${message}, ${phone}`,
  });

  console.error("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.error("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

mailer().catch(console.error);
