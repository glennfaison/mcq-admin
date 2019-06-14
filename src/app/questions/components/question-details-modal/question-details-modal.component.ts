import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/core/models/Question.model';
import { CoreService } from 'src/app/core/services/core.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-question-details-modal',
  templateUrl: './question-details-modal.component.html',
  styleUrls: ['./question-details-modal.component.css']
})
export class QuestionDetailsModalComponent implements OnInit {

  @Input() selectedItem: Question;
  @Input() selectAction: 'view' | 'edit' | 'delete' | 'create';
  @Output() confirm: EventEmitter<Question> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(
    private core: CoreService,
    private auth: AuthService,
  ) {
    if (!this.selectedItem) { this.setQuestionAuthor(); }
  }

  ngOnInit() {}

  async setQuestionAuthor() {
    const item = new Question();
    const thisUser = this.core.thisUser ? this.core.thisUser : await this.auth.getThisUser();
    item.createdBy = thisUser._id;
    this.selectedItem = item;
  }

  action() {
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
