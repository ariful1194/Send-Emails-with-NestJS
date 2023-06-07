import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/mail/mail.module';
import { CustomerSchema } from 'src/models/customer.schema';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
    MailModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
