import { Document } from 'mongoose';

export interface Customer extends Document {
  name: string;
  email?: string;
  address: string;
  mobile: string;
  note?: string;
}
