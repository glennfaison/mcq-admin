import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from 'src/app/core/models/Quiz.model';
import { CoreService } from 'src/app/core/services/core.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Topic } from 'src/app/core/models/Topic.model';

@Component({
  selector: 'app-quiz-details-modal',
  templateUrl: './quiz-details-modal.component.html',
  styleUrls: ['./quiz-details-modal.component.css']
})
export class QuizDetailsModalComponent implements OnInit {

  @Input() selectedItem?: Quiz;
  @Input() topicList?: Topic[];
  @Input() selectAction: 'view' | 'edit' | 'delete' | 'create';
  @Output() confirm: EventEmitter<Quiz> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(
    private core: CoreService,
    private auth: AuthService,
  ) {
    if (!this.selectedItem) { this.setQuizAuthor(); }
  }

  ngOnInit() { }

  async setQuizAuthor() {
    this.selectedItem = new Quiz();
    let thisUser = this.core.thisUser;
    if (!thisUser) { thisUser = await this.auth.getThisUser(); }
    this.selectedItem.createdBy = thisUser._id;
    this.selectedItem.topicIdList = this.topicList.map(topic => topic._id);
    console.log(this.selectedItem);
    this.selectedItem = this.selectedItem;
  }

  action() {
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
