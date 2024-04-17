import { User } from '../../user/entities/user.entity';
import { Question } from '../../questions/entities/question.entity';
import { Answers } from '@prisma/client';

export class Answer implements Answers {
  id: number;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  questionId: number;
  user: User;
  question: Question;
}
