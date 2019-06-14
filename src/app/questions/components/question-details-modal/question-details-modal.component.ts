import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';

@Component({
  selector: 'app-question-details-modal',
  templateUrl: './question-details-modal.component.html',
  styleUrls: ['./question-details-modal.component.css']
})
export class QuestionDetailsModalComponent implements OnInit {

  @Input() selectedItem: Question;
  @Input() selectAction: 'view' | 'edit' | 'delete';
  @Output() confirm: EventEmitter<Question> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
