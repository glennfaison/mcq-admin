import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';
import { UserAnswer } from 'src/app/core/models/UserQuiz.model';
import { Option } from 'src/app/core/models/Option.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() userAnswer: UserAnswer;
  get question(): Question { return this.userAnswer.question; }
  get options(): Option[] {
    console.log(this.userAnswer.optionList);
    return this.userAnswer.optionList;
  }
// tslint:disable-next-line: variable-name
  private _color: string;
  public get color(): string {
    if (!this.question || !Array.isArray(this.question.optionList) ||
      this.userAnswer.selectedOptionIdList.length) { return 'secondary'; }
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  constructor() {
    this.setColor();
  }

  ngOnInit() {
  }

  setColor() {
    const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

}
