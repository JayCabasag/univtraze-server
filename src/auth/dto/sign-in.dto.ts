import * as Joi from 'joi';
import { UserType } from 'src/users/entities/user.entity';

export const signInSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  type: Joi.string().required(),
  password: Joi.string().required(),
});

export class SignInDto {
  email: string;
  type: UserType;
  password: string;
}
