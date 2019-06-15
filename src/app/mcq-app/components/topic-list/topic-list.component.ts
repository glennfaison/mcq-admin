import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/core/services/topic.service';
import { Topic } from 'src/app/core/models/Topic.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topicList: Topic[];

  constructor(
    private topicSvc: TopicService,
  ) {
    this.fetchTopics();
  }

  ngOnInit() {
  }

  async fetchTopics(): Promise<void> {
    try {
      const res: Topic[] = await this.topicSvc.fetchTopics();
      if (!Array.isArray(res)) { throw res; }
      this.topicList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

}
