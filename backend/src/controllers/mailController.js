const { sendMail } = require("../utils/mailer");
const resetTemplate = require("../templates/resetTemplate");
const contactTemplate = require("../templates/contactTemplate");

exports.forgotten = async (req, res) => {
  const data = req.body;

  try {
    const template = resetTemplate("Lien pour reset PW");

    await sendMail(data, template);

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
};

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
