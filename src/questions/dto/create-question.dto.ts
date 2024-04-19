import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @Length(6)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Length(6)
  @IsString()
  @IsNotEmpty()
  body: string;
}
