const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(1).messages({
    "string.base": `Ad alanı String bir değer olmalıdır!`,
    "string.empty": `Ad alanı boş bırakılamaz!`,
    "string.min": `Ad en az {#limit} karakter olmalı!`,
    "any.required": `Ad alanı boş bırakılamaz!`,
  }),
  branch: Joi.string().required().min(1).messages({
    "string.base": `Branş alanı String bir değer olmalıdır!`,
    "string.empty": `Branş alanı boş bırakılamaz!`,
    "string.min": `Branş en az {#limit} karakter olmalı!`,
    "any.required": `Branş alanı boş bırakılamaz!`,
  }),
});

module.exports = {
  createValidation,
};
