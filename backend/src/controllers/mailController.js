const { sendMail } = require("../utils/mailer");
const contactTemplate = require("../templates/contactTemplate");
const freelancerAnnonceMatchTemplate = require("../templates/freelancerAnnonceMatchTemplate");
const freelancerNoMatchTemplate = require("../templates/freelancerNoMatchTemplate");

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

exports.freelancerAnnonceMatch = async (req, res) => {
  const data = req.body;
  try {
    const template = freelancerAnnonceMatchTemplate(data);

    await sendMail(data, template);

    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
};

exports.freelancerNoMatch = async (req, res) => {
  const data = req.body;
  try {
    const template = freelancerNoMatchTemplate(data);

    await sendMail(data, template);

    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
};
