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
    phone: Joi.string().max(300).presence(presence),
    experienceYear: Joi.number().presence(presence).options({ convert: false }),
    price: Joi.number().presence(presence).options({ convert: false }),
    description: Joi.string().max(1000).presence(presence),
    acceptEmails: Joi.boolean().presence(presence),
    siret: Joi.number().presence(presence).options({ convert: false }),
    available: Joi.boolean().presence(presence),
    picture: Joi.string().max(1000).presence(presence),
  }).validate(data, { abortEarly: false }).error;
  if (validationErrors) {
    return validationErrors;
  }
  return false;
};
