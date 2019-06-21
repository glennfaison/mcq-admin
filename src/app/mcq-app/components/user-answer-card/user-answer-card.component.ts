import { Component, OnInit, Input } from '@angular/core';
import { UserAnswer, UserQuiz } from 'src/app/core/models/UserQuiz.model';

@Component({
  selector: 'app-user-answer-card',
  templateUrl: './user-answer-card.component.html',
  styleUrls: ['./user-answer-card.component.css']
})
export class UserAnswerCardComponent implements OnInit {

  @Input() userAnswer: UserAnswer;

  private _color: string;
  public get color(): string {
    if (!this.userAnswer) { return 'secondary'; }
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  constructor() {
    this.setColor();
  }

  ngOnInit() { }

  setColor() {
    const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  toggleOption(index: number) {
    const indexToToggleAt = this.userAnswer.selectedOptionIndices.findIndex(i => i === index);
    if (indexToToggleAt === -1) {
      this.userAnswer.selectedOptionIndices = [...this.userAnswer.selectedOptionIndices, index];
    } else {
      this.userAnswer.selectedOptionIndices.splice(indexToToggleAt, 1);
    }
  }

}
