import { Topic } from './Topic.model';
import { Question } from './Question.model';

export class Quiz {
  [x: string]: any;
  _id: any;
  name: string;
  description: string;
  timeAllowed: number;
  questionCount: number;
  topicIdList: any[];
  topicList?: Topic[];
  questionIdList: any[];
  questionList: Question[];
  createdBy: string;
}
