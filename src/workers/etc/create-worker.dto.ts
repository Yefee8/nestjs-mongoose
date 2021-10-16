import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from 'class-validator';

export class CreateWorkerDto {
  @IsEmail()
  email: string;
  @Length(8,16)
  @IsString()
  @IsNotEmpty()
  password: string;
}