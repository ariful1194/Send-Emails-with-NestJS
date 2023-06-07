import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCustomerDTO {
  // Validates for a non-empty string
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  budget: string;

  @IsNotEmpty()
  webUrl: string;

  @IsOptional()
  message: string;
}
