export class UserAnswer {
  [x: string]: any;
  questionId: any;
  selectedOptionIdList: any[];
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
