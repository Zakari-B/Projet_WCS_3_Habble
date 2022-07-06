const { string } = require("joi");
const Joi = require("joi");

exports.validateUser = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: Joi.string().min(3).max(100).presence(presence),
    lastname: Joi.string().max(100).presence(presence),
    email: Joi.string().email().max(100).presence(presence),
    password: Joi.string().min(8).max(255).presence(presence),
    role: Joi.string()
      .valid("freelancer", "employer", "coordinator", "admin")
      .max(100)
      .presence(presence),
    profileIsComplete: Joi.boolean().presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateFreelancer = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    displayName: Joi.string().max(100).presence(presence),
    activityDescription: Joi.string().max(255).presence(presence),
    userId: Joi.number().presence(presence).options({ convert: false }),
    zipCode: Joi.string().max(10).presence(presence),
    phone: Joi.string().max(300).presence("optional").allow(null, ""),
    experienceYear: Joi.number().presence(presence),
    price: Joi.number().presence(presence).options({ convert: false }),
    description: Joi.string().max(1000).presence(presence),
    acceptEmails: Joi.boolean().presence(presence),
    siret: Joi.number().presence(presence).options({ convert: false }),
    available: Joi.boolean().presence(presence),
    picture: Joi.string().max(1000).presence("optional").allow(null, ""),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateDiploma = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    title: Joi.string().max(100).presence(presence),
    school: Joi.string().max(100).presence(presence),
    monthDelivered: Joi.string().max(100).presence(presence),
    yearDelivered: Joi.number().presence(presence).options({ convert: false }),
    description: Joi.string().max(500).allow(null, ""),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateFormation = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    level: Joi.string().max(255).presence(presence),
    institution: Joi.string().max(255).presence(presence),
    startMonth: Joi.string().max(255).presence(presence),
    startYear: Joi.number().presence(presence).options({ convert: false }),
    endMonth: Joi.string().max(255).presence(presence),
    endYear: Joi.number().presence(presence).options({ convert: false }),
    description: Joi.string().max(500).allow(null, ""),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateExperiencePro = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    title: Joi.string().max(100).presence(presence),
    company: Joi.string().max(100).presence(presence),
    startMonth: Joi.string().max(100).presence(presence),
    startYear: Joi.number().presence(presence).options({ convert: false }),
    endMonth: Joi.string().max(100).presence(presence),
    endYear: Joi.number().presence(presence).options({ convert: false }),
    currentJob: Joi.boolean(),
    description: Joi.string().max(500).allow(null, ""),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateEmployer = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    displayName: Joi.string().max(100).presence(presence),
    description: Joi.string().max(1000).presence(presence),
    phone: Joi.string().max(300).presence(presence),
    userId: Joi.number().presence(presence).options({ convert: false }),
    available: Joi.boolean().presence(presence),
    picture: Joi.string().max(1000).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateLocation = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    name: Joi.string().max(100).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateAccompagnement = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: string().max(100).presence(presence),
    lastname: string().max(100).presence(presence),
    legalGuardian: string().max(100).presence(presence),
    adress: string().max(255).presence(presence),
    phoneNumber: string().max(20).presence(presence),
    email: string().max(100).presence(presence),
    disabilityType: string().max(100).presence(presence),
    complementary_info: string(),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};
