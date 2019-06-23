export class Question {
  [x: string]: any;
  _id: any;
  text: string;
  optionList: string[] = [];
  correctOptionIndices: number[] = [];
  topicId: any;
  createdBy: string;
  isSelected ?= true;
}
