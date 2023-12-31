import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserType } from 'src/users/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string, type: UserType): Promise<any> {
    const user = await this.userService.findOne(email, type);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare the entered password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch || user.type !== type) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      type: user.type,
      verified: user.verified,
    };

    return {
      user: payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(email: string, password: string, type: UserType): Promise<any> {
    const user = await this.userService.findOne(email, type);

    if (user) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    const createdUser = await this.userService.create(
      email,
      hashedPassword,
      type,
    );

    const payload = {
      sub: createdUser.id,
      email: createdUser.email,
      type: createdUser.type,
      verified: createdUser.verified,
    };
    return {
      user: payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

/*
TODO: Refactor this one if requires more secure authentication
*/
