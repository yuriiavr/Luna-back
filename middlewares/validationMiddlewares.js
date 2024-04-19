const Joi = require("joi");

module.exports = {
  addArticletValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().min(5).required(),
      sub: Joi.string().min(5).required(),
      thumbSrc: Joi.string().required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },

  putArticleValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().min(5).required(),
      sub: Joi.string().min(5).required(),
      thumbSrc: Joi.string().required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }
    next();
  },

  favoriteValidation: (req, res, next) => {
    const schema = Joi.object({ favorite: Joi.boolean().required() });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ message: "missing field favorite" });
    }
    next();
  },
  userValidation: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string().alphanum().min(2).max(30).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "ua"] },
        })
        .required(),
      userName: Joi.string().required(),
      subscription: Joi.string().alphanum(),
      token: Joi.string(),
    });
    const validateUser = schema.validate(req.body);
    if (validateUser.error) {
      return res.status(400).json({ message: `${validateUser.error}` });
    }
    next();
  },
  loginValidation: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string().alphanum().min(2).max(30).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "ua"] },
        })
        .required(),
    });
    const validateLogin = schema.validate(req.body);
    if (validateLogin.error) {
      return res.status(400).json({ message: `${validateLogin.error}` });
    }
    next();
  },
  roleValidation: (req, res, next) => {
    const schema = Joi.object({
      role: Joi.string().valid("user", "moderator", "admin").required(),
    });
    const validateLogin = schema.validate(req.body);
    if (validateLogin.error) {
      return res.status(400).json({ message: `${validateLogin.error}` });
    }
    next();
  },
  verifyEmailSchema: (req, res, next) => {
    const schema = Joi.object({ email: Joi.string().required() });
    const verifyEmail = schema.validate(req.body);
    if (verifyEmail.error) {
      return res.status(400).json({ message: "missing required field email" });
    }
    next();
  },
};