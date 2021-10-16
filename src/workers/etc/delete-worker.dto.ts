import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from "class-validator";

export class DeleteWorkerDto {
  @IsEmail()
  email: string;
  @Length(8, 16)
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  changedPass: string;
}