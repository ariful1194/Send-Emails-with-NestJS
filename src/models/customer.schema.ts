import * as mongoose from 'mongoose';
// import * as bcrypt from 'bcrypt';

export const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      trim: true,
      lowercase: true,
    },
    budget: {
      type: Number,
      required: true,
    },

    webUrl: {
      type: String,
      require: true,
    },
    message: {
      type: String,
    },
    submitDate: {
      type: Date,
      default: Date.now,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
    note: {
      type: String,
    },
  },
  { versionKey: false },
);
