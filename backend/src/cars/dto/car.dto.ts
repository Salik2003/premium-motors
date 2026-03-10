import { IsString, IsNumber, IsBoolean, IsArray, IsOptional, IsEnum } from 'class-validator';

export class CreateCarDto {
  @IsString()
  title: string;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;

  @IsNumber()
  price: number;

  @IsNumber()
  mileage: number;

  @IsString()
  fuel_type: string;

  @IsString()
  transmission: string;

  @IsString()
  condition: string;

  @IsString()
  color: string;

  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  registered_in?: string;

  @IsOptional()
  @IsNumber()
  num_owners?: number;

  @IsNumber()
  engine_cc: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsOptional()
  @IsBoolean()
  is_featured?: boolean;
}

export class UpdateCarDto extends CreateCarDto {}
