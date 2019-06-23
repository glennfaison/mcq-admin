import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from 'src/app/core/models/Topic.model';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  @Input() topic: Topic;
  @Output() toggleSelection: EventEmitter<void> = new EventEmitter();
  color: string;

  constructor() {
    this.setColor();
  }

  ngOnInit() {
    this.topic.isSelected = true;
  }

  setColor() {
    const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  toggleIsSelected(topic: Topic) {
    topic.isSelected = !topic.isSelected;
    this.toggleSelection.emit();
  }

}
