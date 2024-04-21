import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { now } from 'mongoose';
import { Transaction } from './Transaction.schema';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  userName: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    default: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/HCMCUT.svg',
  })
  avatarUrl: string;

  @Prop({ default: now() })
  created_at: Date;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }])
  transactions: Transaction[];

  @Prop({ default: now() })
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
