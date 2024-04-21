import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transaction {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  detail: string;

  @Prop({ required: true })
  money: number;

  @Prop({ default: new Date(Date.now()) })
  created_at: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
