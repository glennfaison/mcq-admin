export class Question {
  _id: any;
  text: string;
  optionList: string[];
  correctOptionIndices: string[];
  topicId: any;
  createdBy: string;
  isSelected ?= true;
}
