import { DefaultValuePipe } from '@nestjs/common';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  avatarUrl: string;
}
