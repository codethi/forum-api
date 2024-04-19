import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAnswerDto {
  @Length(6)
  @IsString()
  @IsNotEmpty()
  body: string;
}
