import {
  IsString,
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(6)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Length(6)
  @IsAlpha()
  @IsNotEmpty()
  password: string;
}
