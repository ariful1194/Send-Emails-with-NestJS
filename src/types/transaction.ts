import { Document } from 'mongoose';

export enum TransactionType {
  debit = 'debit',
  credit = 'credit',
}
export interface Transaction extends Document {
  customer: string;
  amount: number;
  date?: Date;
  transactionType: TransactionType;
  note?: string;
}
