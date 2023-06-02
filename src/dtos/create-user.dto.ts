import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDTO {
  // Validates for a non-empty string
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  mobile: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  note: string;
}
