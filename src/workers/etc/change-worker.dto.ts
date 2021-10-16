import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from 'class-validator';

export class ChangeWorkerDto {
  @IsEmail()
  email: string;
  @Length(8,16)
  @IsString()
  @IsNotEmpty()
  password: string;
  
  @Length(8,16)
  @IsString()
  @IsNotEmpty()
  changedPass: string;
}