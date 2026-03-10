import { IsString, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class CreateInvestorLeadDto {
  @IsString()
  full_name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  city: string;

  @IsNumber()
  investment_amount: number;

  @IsString()
  plan_selected: string;

  @IsOptional()
  @IsString()
  message?: string;
}
