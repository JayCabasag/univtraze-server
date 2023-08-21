import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UsePipes,
} from '@nestjs/common';
import { SignInValidation } from './validation/sign-in.validation';
import { SignInDto, signInSchema } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { SignUpValidation } from './validation/sign-up.validation';
import { SignUpDto, signUpSchema } from './dto/sign-up.dto';
import { Public } from './auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @UsePipes(new SignInValidation(signInSchema))
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(
      signInDto.email,
      signInDto.password,
      signInDto.type,
    );
  }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  @UsePipes(new SignUpValidation(signUpSchema))
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(
      signUpDto.email,
      signUpDto.password,
      signUpDto.type,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify')
  verify(@Request() req) {
    return req['user'];
  }
}

/*
TODO: Refactor this one if requires more secure authentication
*/
