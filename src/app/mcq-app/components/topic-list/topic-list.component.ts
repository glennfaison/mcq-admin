import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/core/services/topic.service';
import { Topic } from 'src/app/core/models/Topic.model';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/core/services/quiz.service';
import { Quiz } from 'src/app/core/models/Quiz.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  get isAnyUnSelected(): boolean {
    if (!Array.isArray(this.topicList)) { return false; }
    return this.topicList.some(topic => !topic.isSelected);
  }
  selectedTopics: Topic[];
  selectAction: 'view' | 'edit' | 'delete' | 'create';

  topicList: Topic[];

  constructor(
    private topicSvc: TopicService,
    private quizSvc: QuizService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.fetchTopics();
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

  selectAll() {
    if (!Array.isArray(this.topicList)) { return; }
    this.topicList.forEach(topic => topic.isSelected = true);
  }

  unselectAll() {
    if (!Array.isArray(this.topicList)) { return; }
    this.topicList.forEach(topic => topic.isSelected = false);
  }

  async createQuiz(quiz: Quiz) {
    console.log(quiz);
    quiz = await this.quizSvc.createQuiz(quiz);
    this.router.navigate([`/quizes/${quiz._id}`]);
  }

  showQuizAddModal() {
    this.selectedTopics = this.topicList.filter(topic => topic.isSelected);
    this.selectAction = 'create';
  }

  onModalConfirmed(item: Quiz) {
    try {
      switch (this.selectAction) {
        case 'create':
          this.createQuiz(item);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.clearModalData();
    }
  }

  clearModalData() {
    this.selectAction = null;
  }

}
