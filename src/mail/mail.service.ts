import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(name = 'Ariful Islam') {
    const url = `example.com/auth/confirm?token=token`;

    let value = await this.mailerService.sendMail({
      to: 'arif.softron@gmail.com',
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: name,
        url,
      },
    });
    return value;
  }
}
