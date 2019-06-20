import { Question } from './Question.model';
import { Option } from './Option.model';
import { Quiz } from './Quiz.model';

export class UserAnswer {
  [x: string]: any;
  questionId: any;
  question?: Question;
  isCorrect = false;
  selectedOptionIdList: any[] = [];
  optionList?: Option[];
  correctOptionsList?: Option[];
}

export class UserQuiz {
  [x: string]: any;
  _id: any;
  userId: any;
  quizId: any;
  quiz?: Quiz;
  startedOn: any;
  isCompleted: boolean;
  userAnswerList: UserAnswer[] = [];
  createdBy: string;
}
