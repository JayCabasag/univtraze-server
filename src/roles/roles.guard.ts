import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './entities/role.entity';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const [token, role] = this.extractTokenFromHeader(request);

    if (!token || !role) {
      throw new UnauthorizedException('Unauthorized');
    }

    return requireRoles.some((requireRole) => requireRole === role);
  }

  private extractTokenFromHeader(request: Request): string[] | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const role = this.jwtService.decode(token) as { type: string };
    return type === 'Bearer' ? [token, role.type] : undefined;
  }
}
