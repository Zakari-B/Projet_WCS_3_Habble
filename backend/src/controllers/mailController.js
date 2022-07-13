const { sendMail } = require("../utils/mailer");
const contactTemplate = require("../templates/contactTemplate");

exports.contact = async (req, res) => {
  const data = req.body;

  try {
    const template = contactTemplate(data);

    await sendMail(data, template);

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
};
