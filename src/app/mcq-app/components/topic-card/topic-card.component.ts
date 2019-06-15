import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/core/models/Topic.model';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  @Input() topic: Topic;
  isSelected = true;
  color: string;

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
