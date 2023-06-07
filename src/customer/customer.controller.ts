import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCustomerDTO } from 'src/dtos/create-customer.dto';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getallCustomer() {
    return 'all customer';
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createACustomer(@Body() createCustomerDto: CreateCustomerDTO) {
    return this.customerService.createNewUser(createCustomerDto);
  }
}
