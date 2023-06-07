import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST_NAME'),
          secure: false,
          auth: {
            user: config.get('USER_EMAIL'),
            pass: config.get('USER_EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `${config.get('EMAIL_NAME')} <${config.get('USER_EMAIL')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
