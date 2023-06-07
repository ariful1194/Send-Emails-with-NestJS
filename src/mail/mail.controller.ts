import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
  ) {}
  @Get('sendmail')
  async sendMail() {
    return await this.mailService.sendUserConfirmation('Owner');
  }
}
