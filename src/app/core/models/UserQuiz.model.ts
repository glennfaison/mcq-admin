import { Question } from './Question.model';
import { Quiz } from './Quiz.model';

export class UserAnswer {
  questionId: any;
  selectedOptionIndices: number[];
  isCorrect?: boolean;
  question?: Question;
}

export class UserQuiz {
  [x: string]: any;
  _id: any;
  userId: any;
  quizId: any;
  startedOn: any;
  isCompleted: boolean;
  userAnswerList: UserAnswer[] = [];
  createdBy: string;
  quiz?: Quiz;
}
