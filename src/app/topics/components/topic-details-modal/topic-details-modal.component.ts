import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from 'src/app/core/models/Topic.model';

@Component({
  selector: 'app-topic-details-modal',
  templateUrl: './topic-details-modal.component.html',
  styleUrls: ['./topic-details-modal.component.css']
})
export class TopicDetailsModalComponent implements OnInit {

  @Input() selectedItem: Topic;
  @Input() selectAction: 'view' | 'edit' | 'delete';
  @Output() confirm: EventEmitter<Topic> = new EventEmitter();
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
