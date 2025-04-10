import { notEqual } from "assert";
import { Equals, IsArray, IsBoolean, IsDefined, isDefined, IsEmpty, IsIn, IsInt, isNotEmpty, IsNotEmpty, IsNumber,IsNotIn, isNumber, IsOptional, IsString, NotEquals, IsEnum, IsDate, IsDateString, IsDivisibleBy, IsPositive, IsNegative, Min, Max, Contains, notContains, NOT_CONTAINS, NotContains, IsAlphanumeric, IsCreditCard, IsHexColor, MaxLength,MinLength, IsUUID, IsLatLong,ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint, Validate } from "class-validator";
import { Movie } from "../movie.service";

enum MovieGenre{
  fantasy = 'fantasy',
  action = 'action',
}
export class UpdateMovieDto{
  @IsNotEmpty()
  @IsOptional()
  title?: string;
  
  @IsNotEmpty()
  @IsOptional()
  genre?: string;
  
}
 