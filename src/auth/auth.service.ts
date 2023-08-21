import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string, type: string): Promise<any> {
    const user = await this.userService.findOne(email, type);
    if (user?.password !== password && user?.type !== type) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async singUp(email: string, password: string, type: string): Promise<any> {
    const user = await this.userService.create(email, password, type);
    const payload = { sub: user.userId, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
