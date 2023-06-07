import { Document } from 'mongoose';
type EmailPattern = '/^[^s@]+@[^s@]+.[^s@]+$/';

export interface Customer extends Document {
  name: string;
  email: EmailPattern;
  budget: boolean;
  webUrl: string;
  message?: string;
  submitDate?: Date;
  emailSent?: boolean;
  note?: string;
}
