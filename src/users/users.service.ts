import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { User } from 'src/types/user';
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  private readonly users: User[] = [];

  async findOne(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email });
  }

  async createNewUser(createUserDto: CreateUserDTO): Promise<User> {
    const hash = await argon.hash(createUserDto.password);
    const newUser = new this.userModel({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
      mobile: createUserDto.mobile,
      address: createUserDto.address,
      note: createUserDto.note,
    });

    try {
      let result = await newUser.save();
      return result;
    } catch (error) {
      if (error.code == 11000) {
        throw new ForbiddenException('Credintial taken');
      }
      return error;
    }
  }
}
