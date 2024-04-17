import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';

@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
