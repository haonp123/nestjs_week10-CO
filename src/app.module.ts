import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import * as process from "process";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI,
    ),
    UsersModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
