import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  address: string;
  mobile: string;
  note?: string;
}
