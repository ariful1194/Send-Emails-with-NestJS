import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret012', //TODO: move it to env variable
    });
  }

  async validate(payload: any) {
    // const user = this.userService.getById(payload.id);
    return payload;
    return {
      id: payload.id,
      name: payload.name,
    };
  }
}
