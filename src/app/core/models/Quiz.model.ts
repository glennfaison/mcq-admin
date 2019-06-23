import { Topic } from './Topic.model';
import { Question } from './Question.model';

export class Quiz {
  [x: string]: any;
  _id: any;
  name: string;
  description: string;
  questionCount: number;
  topicIdList: any[];
  questionIdList: any[];
  timeAllowed: number;
  createdBy: string;
  questionList?: Question[];
  topicList?: Topic[];
}
