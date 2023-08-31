import * as Joi from 'joi';
import { UserType } from 'src/users/interface/user.interface';

export const signUpSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  type: Joi.string().required(),
  password: Joi.string().required(),
});

export class SignUpDto {
  email: string;
  type: UserType;
  password: string;
}
