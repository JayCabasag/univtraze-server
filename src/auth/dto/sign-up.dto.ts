import * as Joi from 'joi';

export const signUpSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  type: Joi.string().required(),
  password: Joi.string().required(),
});

export class SignUpDto {
  email: string;
  type: string;
  password: string;
}
