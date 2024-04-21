import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/CreateTransaction.dto';
import { TransactionsService } from './transactions.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('transactions')
@ApiTags('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Post()
  createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Get()
  getTransactions() {
    return this.transactionService.getTransactions();
  }
}
