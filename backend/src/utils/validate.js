const Joi = require("joi");

exports.validateUser = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: Joi.string().min(1).max(100).presence(presence),
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
    siret: Joi.string().min(14).max(14).presence("optional").allow(null, ""),
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

exports.validateFamily = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    firstname: Joi.string().max(100).presence(presence),
    lastname: Joi.string().max(100).presence(presence),
    legalGuardian: Joi.string().max(100).presence(presence),
    address: Joi.string().max(255).presence(presence),
    phoneNumber: Joi.string().max(20).presence(presence),
    email: Joi.string().max(100).presence(presence),
    disabilityType: Joi.string().max(100).presence(presence),
    complementary_info: Joi.string().presence("optional").allow(null, ""),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateOfferCreation = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    price: Joi.number().presence(presence).options({ convert: false }),
    description: Joi.string().max(500).presence(presence),
    availableIn: Joi.string().max(500).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateOfferUpdate = (data, forCreation = false) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    price: Joi.number().presence(presence).options({ convert: false }),
    description: Joi.string().max(500).presence(presence),
    availableIn: Joi.string().max(500).presence(presence),
    status: Joi.string().max(500).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateAnnouncement = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  const validationErrors = Joi.object({
    title: Joi.string().max(100).presence(presence),
    description: Joi.string().max(500).presence(presence),
    zipCode: Joi.string().max(10).presence(presence).allow(null, ""),
    price: Joi.number().presence(presence).options({ convert: false }),
    emergency: Joi.boolean(),
    expertise: Joi.string().max(500),
    location: Joi.string().max(100),
    status: Joi.string().max(100).allow(null, ""),
    familyId: Joi.number().presence("optional").options({ convert: false }),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};

exports.validateCoordinator = (data, forCreation = true) => {
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
