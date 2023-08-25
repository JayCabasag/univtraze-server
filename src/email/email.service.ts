import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import * as fs from 'fs';
import * as path from 'path';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Initialize the transporter (you need to configure this)
    this.transporter = nodemailer.createTransport({
      // Your email configuration
    });
  }

  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }

  async sendWelcomeEmail(toEmail: string, userName: string) {
    try {
      const templatePath = path.join(
        __dirname,
        'templates',
        'welcome-email.template.html',
      );
      const templateContent = fs.readFileSync(templatePath, 'utf8');

      // Replace placeholders in the template
      const personalizedTemplate = templateContent.replace(
        "[User's Name]",
        userName,
      );

      // Send the email
      await this.transporter.sendMail({
        from: 'your@example.com',
        to: toEmail,
        subject: 'Welcome to Our App!',
        html: personalizedTemplate,
      });
    } catch (error) {
      // Handle error
    }
  }
}
