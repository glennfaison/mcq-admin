import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from 'src/app/core/models/Topic.model';
import { CoreService } from 'src/app/core/services/core.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-topic-details-modal',
  templateUrl: './topic-details-modal.component.html',
  styleUrls: ['./topic-details-modal.component.css']
})
export class TopicDetailsModalComponent implements OnInit {

  @Input() selectedItem: Topic;
  @Input() selectAction: 'view' | 'edit' | 'delete' | 'create';
  @Output() confirm: EventEmitter<Topic> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(
    private core: CoreService,
    private auth: AuthService,
  ) {
    if (!this.selectedItem) { this.setTopicAuthor(); }
  }

  ngOnInit() {}

  async setTopicAuthor() {
    const item = new Topic();
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
