import * as Joi from 'joi';

export const CreateProfileSchema = Joi.object({
  userId: Joi.number().required().messages({
    'any.required': 'User id is required',
  }),
  firstName: Joi.string()
    .required()
    .pattern(/^[A-Za-z\s]+$/)
    .messages({
      'any.required': 'First Name is required',
      'string.pattern.base': 'First Name must contain only letters',
    }),
  middleName: Joi.string(),
  lastName: Joi.string().required().messages({
    'any.required': 'Last Name is required',
  }),
  suffix: Joi.string(),
  gender: Joi.string().required().messages({
    'any.required': 'Gender is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+63\s\d{3}\s\d{3}\s\d{4}$|^\d{4}\s\d{3}\s\d{4}$/)
    .required()
    .messages({
      'any.required': 'Phone Number is required',
      'string.pattern.base': 'Invalid phone number format',
    }),
  dateOfBirth: Joi.date().required().max('now').messages({
    'any.required': 'Date of Birth is required',
    'date.max': 'You must be at least 12 years old',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Address is required',
  }),
}).messages({
  'date.base': '{{#label}} is not a valid date',
});

export class CreateProfileDto {
  userId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  gender: string;
  address: string;
  phoneNumber: string;
  dateOfBirth: string;
}
