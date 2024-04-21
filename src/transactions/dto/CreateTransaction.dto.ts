import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  detail?: string;

  @IsNotEmpty()
  @IsNumber()
  money: number;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
