import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDTO } from 'src/dtos/create-customer.dto';
import { MailService } from 'src/mail/mail.service';
import { Customer } from 'src/types/customer';

@Injectable()
export class CustomerService {
  // constructor
  constructor(
    @InjectModel('Customer') private customerModel: Model<Customer>,
    private mailService: MailService,
  ) {}

  async createNewUser(
    createUserDto: CreateCustomerDTO,
  ): Promise<Customer | any> {
    const newCustomer = new this.customerModel({
      name: createUserDto.name,
      email: createUserDto.email,
      budget: createUserDto.budget,
      webUrl: createUserDto.webUrl,
      message: createUserDto.message,
    });
    try {
      let result = await newCustomer.save();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
