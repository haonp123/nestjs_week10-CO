import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from 'src/schemas/Transaction.schema';
import { CreateTransactionDto } from './dto/CreateTransaction.dto';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createTransaction({
    userId,
    ...createTransactionDto
  }: CreateTransactionDto) {
    const user = await this.userModel.findById(userId);
    if (!user) throw new HttpException('User not found', 404);
    const newTransaction = new this.transactionModel(createTransactionDto);
    const savedTransaction = await newTransaction.save();
    await user.updateOne({
      $push: {
        transactions: savedTransaction._id,
      },
    });
    return savedTransaction;
  }

  findTransactionById() {}

  getTransactions() {
    return this.transactionModel.find();
  }
}
