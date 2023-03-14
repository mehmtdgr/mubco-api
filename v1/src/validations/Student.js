const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(1).messages({
    "string.base": `Ad alanı String bir değer olmalıdır!`,
    "string.empty": `Ad alanı boş bırakılamaz!`,
    "string.min": `Ad en az {#limit} karakter olmalı!`,
    "any.required": `Ad alanı boş bırakılamaz!`,
  }),
  surname: Joi.string().required().min(1).messages({
    "string.base": `Soyad alanı String bir değer olmalıdır!`,
    "string.empty": `Soyad alanı boş bırakılamaz!`,
    "string.min": `Soyad en az {#limit} karakter olmalı!`,
    "any.required": `Soyad alanı boş bırakılamaz!`,
  }),
  email: Joi.string().email().required().messages({
    "string.base": `Email alanı String bir değer olmalıdır!`,
    "string.empty": `Email alanı boş bırakılamaz!`,
    "any.required": `Email alanı boş bırakılamaz!`,
    "string.email": `Lütfen geçerli bir email giriniz!`,
  }),
});

module.exports = {
  createValidation,
};

