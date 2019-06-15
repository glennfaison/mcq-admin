export class UserAnswer {
  [x: string]: any;
  questionId: any;
  selectedOptionIds: any[];
}

export class UserQuizState {
  [x: string]: any;
  _id: any;
  userId: any;
  quizId: any;
  startedOn: any;
  isCompleted: boolean;
  userAnswerList: UserAnswer[];
  createdBy: string;
}
