import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from 'src/types/user';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await (await this.usersService.findOne(email)).toObject();

    if (!user) throw new ForbiddenException('Credintial incorrect');
    // compare password
    const compPass = await argon.verify(user.password, pass);
    // check password
    if (!compPass) {
      throw new ForbiddenException('Credintial incorrect ');
    } else {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, id: user._id.toString() };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(createUserDto: CreateUserDTO): Promise<User> {
    let newUser = await this.usersService.createNewUser(createUserDto);
    return newUser;
  }
}
