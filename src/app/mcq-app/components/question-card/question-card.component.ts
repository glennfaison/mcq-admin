import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';
import { UserAnswer, UserQuiz } from 'src/app/core/models/UserQuiz.model';
import { Option } from 'src/app/core/models/Option.model';
import { OptionService } from 'src/app/core/services/option.service';

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

  constructor(
    private optionSvc: OptionService,
  ) {
    this.setColor();
  }

  ngOnInit() {
    if (this.question) {
      this.getOptionList();
    }
  }

  setColor() {
    const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  toggleOption(option: Option) {
    option.isSelected = !option.isSelected;
    if (option.isSelected) { this.userAnswer.selectedOptionIdList = [option._id]; }
  }

  async getOptionList() {
    let optionList = await this.optionSvc.fetchOptionsByQuestionId(this.question._id);
    this.userAnswer.optionList = optionList;
  }

}
